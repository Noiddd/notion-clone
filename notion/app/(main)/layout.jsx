import React from "react";
import Navigation from "./_components/Navigation";
import { Toaster } from "sonner";

export default function MainLayout({ children }) {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        {/* <SearchCommand /> */}
        <Toaster position="bottom-center" />
        {children}
      </main>
    </div>
  );
}
