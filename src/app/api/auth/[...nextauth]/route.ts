import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbClient } from "@/app/db";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Secure Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
        secureKey: {
          label: "Secret Key",
          type: "text",
          placeholder: "Enter your secret key",
        },
      },

      async authorize(credentials) {
        const data = await dbClient.userAuth.findFirst({
          where: {
            username: credentials?.username,
            password: credentials?.password,
            secureKey: credentials?.secureKey,
          },
        });

        if (data) {
          return {
            id: data?.id.toString(),
            name: data?.username,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
