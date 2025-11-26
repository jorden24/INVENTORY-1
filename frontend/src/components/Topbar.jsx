import React from "react";
import { Menu } from "lucide-react";

export default function Topbar({ title }) {
  return (
    <header className="w-full bg-white border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Menu className="lg:hidden w-6 h-6 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="text-gray-500 text-sm">Welcome</div>
    </header>
  );
}