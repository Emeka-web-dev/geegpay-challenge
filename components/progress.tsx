"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBar({ progressPerc }: { progressPerc: number }) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPerc), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="" />;
}
