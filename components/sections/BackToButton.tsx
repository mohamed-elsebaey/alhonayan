"use client";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function BackToButton() {
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
    <div className="mb-6 -mt-10">
      <button
        type="button"
        onClick={handleBack}
        className="cursor-pointer flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg shadow-md font-bold text-sm sm:text-base bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary group"
      >
        <ArrowRight size={22} className="ml-2 transition-transform duration-200 group-hover:-translate-x-1" />
      </button>
    </div>
  );
}
