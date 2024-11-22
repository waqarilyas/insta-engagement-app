import { AuthOptions, getServerSession } from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";

const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID || "",
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // Customize sign-in behavior here if needed
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; // Redirect to the homepage after login
    },
    async session({ session, token }) {
      // Attach additional data to the session if needed
      session.user.id = token.sub || "";
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

console.log(
  "🚀 ~ process.env.INSTAGRAM_CLIENT_ID:",
  process.env.INSTAGRAM_CLIENT_ID
);

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
