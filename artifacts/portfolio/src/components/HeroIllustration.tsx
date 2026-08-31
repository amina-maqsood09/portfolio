import React, { Suspense, lazy } from "react";

const Hero3DScene = lazy(() => import("./Hero3DScene"));

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-500/25 border-t-green-500 animate-spin" />
    </div>
  );
}

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-0">
      <Suspense fallback={<LoadingFallback />}>
        <Hero3DScene />
      </Suspense>
    </div>
  );
}