import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { use } from "react";

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
        const { username, password, secureKey } = credentials || {};
        if (
          username === "abhishek" &&
          password === "abhishek9" &&
          secureKey === "123"
        ) {
          return {
            id: "1",
            name: username,
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
