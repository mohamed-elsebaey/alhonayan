"use server";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Load environment variables from .env file
dotenv.config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 5,
  maxIdle: 5,
  idleTimeout: 30000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

/**
 * Executes a SQL query and returns the results.
 * @param query - The SQL query string.
 * @param values - Optional array of values for parameterized queries.
 * @returns A promise resolving to an array of results.
 */
async function executeQuery<T>(
  query: string,
  values?: (string | number | undefined)[]
): Promise<T[]> {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query<mysql.RowDataPacket[]>(
      query,
      values
    );
    return results as T[];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    connection.release();
  }
}

// ----------------------------- Provider Auth Like Google <Start> -----------------------------

/**
 * Handles user credentials for provider-based authentication (e.g., Google).
 * @param email - User's email.
 * @param name - User's name (optional).
 * @param image - User's profile image URL (optional).
 * @returns An object containing the user data.
 */
export async function userCredentials(
  email: string,
  name?: string,
  image?: string
) {
  const existingUser = await executeQuery<User>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  const user = existingUser[0];

  // Update user's name and image if they have changed
  if (user && (user.name !== name || user.profilePath !== image)) {
    // await executeQuery(
    //   "UPDATE users SET name = ?, profilePath = ?, latest_update = CURRENT_TIMESTAMP WHERE email = ?",
    //   [name, image, email]
    // );
    await executeQuery(
      "UPDATE users SET name = ?, latest_update = CURRENT_TIMESTAMP WHERE email = ?",
      [name, email]
    );
    user.name = name ?? null;
    // user.profilePath = image ?? null;
    return { user };
  }

  // Create a new user if they don't exist
  if (!user) {
    const verificationCode = Math.floor(Math.random() * 1000000);
    const randomPassword = Math.floor(Math.random() * 100000000000000);
    const hashedPassword = await bcrypt.hash(`${randomPassword}`, 10);
    const verified = 1;

    const userData = await executeQuery<User>(
      "INSERT INTO users (name, email, password, verified, verCode, 	profilePath	) VALUES (?, ?, ?, ?, ?, ?) RETURNING id, phone, role, country, state",
      [name, email, hashedPassword, verified, verificationCode, image]
    );

    const userId = userData[0].id;

    const newUser: User = {
      id: userId,
      name: name || null,
      email: email,
      phone: userData[0].phone || null,
      role: userData[0].role as "USER" | "ADMIN" | "CEO" | "DEV",
      profilePath: image || null,
      verified: Boolean(verified),
      country: userData[0].country || null,
      state: userData[0].state || null,
      verCode: verificationCode,
      created_at: new Date(),
      latest_update: new Date(),
    };

    return { user: newUser };
  }

  return { user };
}

// ----------------------------- Provider Auth Like Google <End> -----------------------------

export async function addNewUserWithGoogle(
  email: string,
  password: string,
  verCode: number
) {
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }

  const existingUser = await executeQuery<User>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length > 0) {
    return { errors: { email: "* Email already exists" } };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await executeQuery<User>(
    "INSERT INTO users (email, password, verCode) VALUES (?, ?, ?) RETURNING id,name,phone,role,profilePath,verified,country,state,verCode,created_at,updated_at",
    [email, hashedPassword, verCode]
  );

  const user: User = {
    id: result[0].id,
    name: result[0].name,
    email: email,
    phone: result[0].phone,
    role: result[0].role as "USER" | "ADMIN" | "CEO" | "DEV",
    profilePath: result[0].profilePath,
    verified: result[0].verified,
    country: result[0].country,
    state: result[0].state,
    verCode: result[0].verCode,
    created_at: result[0].created_at,
    latest_update: result[0].latest_update,
  };

  return { user };
}

// ****************************************  Sign In ****************************************

export async function userDataAuthentication(email: string, password: string) {
  const existingUser = await executeQuery<{ password: string } & User>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length == 0) {
    return { errors: { email: "* Invalid email " } };
  }

  const user = existingUser[0];
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return { errors: { password: "* Incorrect password" } };
  }
  return { user: user };
}

// ****************************************  Get User Data ****************************************

export async function getUserDataFromDB(id: number) {
  const existingUser = await executeQuery<User>(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );

  if (existingUser.length == 0) {
    return {
      errors: {
        id: "* Invalid 'id' in function (getUserDataFromDB) in db file ",
      },
    };
  }

  const user = existingUser[0];

  return user as User;
}

// ****************************************  Update User Data ****************************************
export async function updateUserProfileData(
  email: string,
  name: string,
  phone: string,
  country: string,
  profilePath: string
) {
  const UpdateData = await executeQuery<User>(
    "UPDATE users SET name = ? , phone = ? , country = ? , profilePath = ? WHERE email = ?",
    [name, phone, country, profilePath, email]
  );

  return UpdateData;
}

