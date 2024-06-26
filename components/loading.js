import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center my-5 min-h-screen">
      <div className="border-t-4 bg-slate-600 border-blue-500 rounded-full animate-spin h-14 w-14 mr-3 "></div>
      <span className="text-xl font-semibold text-blue-500 dark:text-blue-300">
        Loading...
      </span>
    </div>
  );
}