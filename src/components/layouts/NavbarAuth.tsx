// components/navbar/NavbarAuth.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import UserDropdown from "./UserDropdown";

export function NavbarAuth({ user, auth }) {
  if (!user) {
    return (
      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={auth.login.url}>{auth.login.title}</Link>
        </Button>
        <Button asChild size="sm">
          <Link href={auth.signup.url}>{auth.signup.title}</Link>
        </Button>
      </div>
    );
  }

  return <UserDropdown user={user} />;
}
