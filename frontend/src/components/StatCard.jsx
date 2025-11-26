import React from "react";

export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      </div>
      {Icon && <Icon className="w-8 h-8 text-gray-400" />}
    </div>
  );
}