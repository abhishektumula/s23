"use client";
import { signOut } from "next-auth/react";
import { CustomButton } from "../check-in/button";

export const Logout = () => {
  return <CustomButton func="logOut" desc={signOut} className="text-white" />;
};
