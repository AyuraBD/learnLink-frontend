"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ token }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Verification failed");
        router.push("/login");
      })
      .catch(() => {
        console.error("Email verification failed");
      });
  }, [token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Verifying your email...</p>
    </div>
  );
}
