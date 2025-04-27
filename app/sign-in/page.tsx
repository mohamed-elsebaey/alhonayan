// import SignIn from "@/components/sign-In-up/SignIn";
import { getSession } from "@/lib/jwt";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
  description:
    "تسجيل الدخول إلي حسابك في دار الحنيان للاستشارات الهندسية",
  // alternates: {
  //   canonical: "",
  // },
};

async function page() {
  const sessionData = await getSession();
  if (sessionData) {
    redirect("/");
  }
  return (
    <>
      {/* <SignIn /> */}
      <div>Sign in</div>
    </>
  );
}

export default page;
