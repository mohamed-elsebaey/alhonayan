import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


if (!process.env.SECRET_KEY) {
  throw new Error('SECRET_KEY is not set');
}
const secretKey = process.env.SECRET_KEY;

const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: { user: User; expires: Date }) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 d")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload ;
}

// *********************************************************************************************************************


export async function addUserSessions({user}: {user: User}) {
  // Create the session
  const expires = new Date(Date.now() + 10 * 1000 * 6 * 60 * 24 * 30 );
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  (await cookies()).set("session", session, { expires, httpOnly: true });
}

// *********************************************************************************************************************

export async function logout() {
  // Destroy the session
  (await cookies()).set("session", "", { expires: new Date(0) });
}

// *********************************************************************************************************************

export async function getSession() {
  try{
    const session = (await cookies()).get("session")?.value;
    if (!session) return null;
    return await decrypt(session) as UserSession
  }catch{
    return null
  }
  
}
// *********************************************************************************************************************

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session) as { user: User; expires: Date };
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}