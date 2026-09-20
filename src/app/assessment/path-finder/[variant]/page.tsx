"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { PathFinderGame } from "@/components/game/path-finder/PathFinderGame";
import { useAuth } from "@/lib/auth/auth-context";

export default function PathFinderVariantAssessmentPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  
  const rawVariant = typeof params?.variant === "string" ? params.variant : "practice-1";
  const isFullMock = rawVariant === "full-mock-test" || rawVariant === "full-mock";

  useEffect(() => {
    if (isFullMock && !isLoading && !isAuthenticated) {
      router.replace(`/signin?next=/assessment/path-finder/${rawVariant}`);
    }
  }, [isFullMock, isLoading, isAuthenticated, router, rawVariant]);

  if (isFullMock && (isLoading || !isAuthenticated)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-8 text-center text-slate-500 font-medium">
        Verifying access to Full Mock...
      </div>
    );
  }

  return <PathFinderGame variant={rawVariant || "practice-1"} />;
}
