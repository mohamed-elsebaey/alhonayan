type User = {
  id: number;
  name: string | null;
  email: string;
  phone?: string | null;
  role: "USER" | "ADMIN" | "CEO" | "DEV";
  profilePath: string | null;
  verified: boolean;
  country?: string | null;
  state?: string | null;
  verCode?: number | null;
  created_at?: Date;
  latest_update?: Date;
};

type UserSession = {
  user: User & {
    password?: string;
  };
  expires: string;
  iat: number;
  exp: number;
};
