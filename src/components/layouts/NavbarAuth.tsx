"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import UserDropdown from "./UserDropdown";

type AuthLinks = {
  login: {
    title: string;
    url: string;
  };
  register: {
    title: string;
    url: string;
  };
};

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: null;
  createdAt: string;
  updatedAt:string;
  role:string;
  phone?:string;
};

type NavbarAuthProps = {
  user?: User | null;
  auth: AuthLinks;
};

export function NavbarAuth({ user, auth }:NavbarAuthProps) {
  if (!user) {
    return (
      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={auth.login.url}>{auth.login.title}</Link>
        </Button>
        <Button asChild size="sm">
          <Link href={auth.register.url}>{auth.register.title}</Link>
        </Button>
      </div>
    );
  }

  return <UserDropdown user={user} />;
}
