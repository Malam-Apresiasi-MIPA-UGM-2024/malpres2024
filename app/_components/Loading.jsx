"use client";

import { useState, useEffect } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading screen to disappear after 1 second (1000 milliseconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div>
      <div className="relative inset-0 flex items-center justify-center">
        <img src="/LoadingMalpres.gif" alt="Loading..." width="full" height="full" />
      </div>
    </div>
  );
}
