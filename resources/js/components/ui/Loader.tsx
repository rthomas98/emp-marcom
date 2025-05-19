"use client";

import { useEffect, useState } from "react";

export const Loader = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);
    
    // Remove from DOM after exit animation completes
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
    }, 2700); // 2000ms for exit timer + 700ms for animation duration

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isRemoved) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ position: 'fixed', height: 0, zIndex: 9999 }}>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[#1F1946] transition-transform duration-700 ease-in-out ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {!isExiting && (
          <div className="flex flex-row items-center justify-center gap-4">
            <img
              src="/images/w-emp-logo.svg"
              alt="Empuls3 logo"
              className={`w-12 transition-all duration-500 ease-out border-0 outline-none ${
                showImage ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
              style={{ border: 'none' }}
            />
            <span className={`text-white text-4xl font-bold transition-all duration-500 ease-out ${
                showImage ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}>
              Empuls3
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
