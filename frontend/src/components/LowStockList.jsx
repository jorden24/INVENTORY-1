import React from "react";

export default function LowStockList({ items }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border">
      <h3 className="text-lg font-semibold mb-3">Low Stock Items</h3>
      <ul className="space-y-2">
        {items.length === 0 && <p className="text-gray-500 text-sm">No low-stock items.</p>}

        {items.map((item) => (
          <li
            key={item._id}
            className="flex items-center justify-between p-2 bg-red-50 border border-red-200 rounded-lg"
          >
            <span className="font-medium text-gray-800">{item.name}</span>
            <span className="text-red-600 font-semibold">{item.stock} left</span>
          </li>
        ))}
      </ul>
    </div>
  );
}











// import React from 'react'
// export default function LowStockList({ items }){
// const low = items.filter(i => i.stock > 0 && i.stock < 5)
// return (
// <div className="white-card">
// <h3 className="font-semibold mb-2">Low Stock Items</h3>
// <ul className="space-y-2 max-h-56 overflow-auto">
// {low.map(i => (
// <li key={i._id} className="flex justify-between items-center p-2 bg-red-50 rounded">
// <div>
// <div className="font-medium">{i.name}</div>
// <div className="text-sm text-gray-500">{i.category} • ${i.price}</div>
// </div>
// <div className="text-red-600 font-bold">{i.stock}</div>
// </li>
// ))}
// {low.length === 0 && <li className="text-sm text-gray-500">No low stock items</li>}
// </ul>
// </div>
// )
// }