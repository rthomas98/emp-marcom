"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ToastProps {
  isVisible: boolean;
  message: string;
  title: string;
  onClose: () => void;
  duration?: number;
  type?: "success" | "error";
}

export function Toast({ isVisible, message, title, onClose, duration = 5000, type = "success" }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed left-1/2 top-4 z-50 w-full max-w-md -translate-x-1/2 transform">
      <div className={`rounded-lg p-4 shadow-lg ${type === "error" ? "bg-red-600" : "bg-[#1F1946]"}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <p className="mt-1 text-sm text-gray-300">{message}</p>
          </div>
          <button
            type="button"
            className="ml-4 inline-flex flex-shrink-0 items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
