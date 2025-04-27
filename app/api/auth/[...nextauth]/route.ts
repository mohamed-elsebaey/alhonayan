import { userCredentials } from "@/db/db";
import { addUserSessions } from "@/lib/jwt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Check for required environment variables
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('Missing Google OAuth credentials');
}

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Default profile image if user doesn't have one
const DEFAULT_PROFILE_IMAGE = "https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png";

// NextAuth configuration options
const authOption: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Custom sign-in page configuration
  pages: {
    signIn: '/',
  },
  callbacks: {
    // Redirect callback - always redirects to home page
    async redirect() {
      return '/';
    },
    // Handle sign-in process
    // async signIn({ account, profile }) {
    async signIn({ profile }) {
      try {
        // Validate email existence in profile
        if (!profile?.email) {
          throw new Error("No email found in profile");
        }

        // Prepare user data with fallbacks for name and image
        const userData = {
          email: profile.email,
          name: profile.name || "user",
          image: profile.image || DEFAULT_PROFILE_IMAGE
        };

        // Create or update user in database
        const user = await userCredentials(
          userData.email,
          userData.name,
          userData.image
        );

        // Add user session data
        await addUserSessions(user);
        return true;
      } catch (error) {
        // Log any errors during sign-in process
        console.error("Error during sign in:", error);
        return false;
      }
    },
  },
};

// Create NextAuth handler
const handler = NextAuth(authOption);
// Export handler for API routes
export { handler as GET, handler as POST };
