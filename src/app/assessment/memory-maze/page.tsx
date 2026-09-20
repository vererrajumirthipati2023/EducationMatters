"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MemoryMazeGame } from "@/components/game/memory-maze/MemoryMazeGame";
import { useGameSessionStore } from "@/lib/store/game-session";
import { registerMemoryMaze } from "@/lib/games/memory-maze";
import { useAuth } from "@/lib/auth/auth-context";

export default function MemoryMazeAssessmentPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const currentSession = useGameSessionStore(state => state.currentSession);
  const isFullMock = currentSession?.variantId === "full-memory-mock-test";

  useEffect(() => {
    registerMemoryMaze();
    if (!currentSession) {
      router.replace("/practice/memory-maze");
      return;
    }

    if (isFullMock && !isLoading && !isAuthenticated) {
      router.replace("/signin?next=/practice/memory-maze?variant=full-memory-mock-test");
    }
  }, [currentSession, router, isFullMock, isLoading, isAuthenticated]);

  if (!currentSession) {
    return null;
  }

  if (isFullMock && (isLoading || !isAuthenticated)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-8 text-center text-slate-500 font-medium">
        Verifying access to Full Mock...
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center h-full items-center min-h-[calc(100vh-200px)]">
      <MemoryMazeGame />
    </div>
  );
}
