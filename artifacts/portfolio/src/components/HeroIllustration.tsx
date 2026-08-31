import React, { Suspense, lazy } from "react";

const Hero3DScene = lazy(() => import("./Hero3DScene"));

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-14 h-14 rounded-full border-2 border-green-500/25 border-t-green-500 animate-spin" />
    </div>
  );
}

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[320px]">
      <Suspense fallback={<LoadingFallback />}>
        <Hero3DScene />
      </Suspense>
    </div>
  );
}
