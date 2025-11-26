import React, {useEffect, useState} from 'react'
import { api } from '../../lib/mockApi'
import { Link } from 'react-router-dom'

export default function SalesList(){
  const [sales, setSales] = useState([])
  useEffect(()=>{ api.getSales().then(setSales) },[])

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sales</h1>
        <Link to="/sales/create" className="bg-blue-600 text-white px-3 py-2 rounded">New Sale</Link>
      </div>

      <div className="white-card">
        {sales.length === 0 && <div className="text-gray-500">No sales yet</div>}
        <ul className="space-y-3">
          {sales.map(s => (
            <li key={s._id} className="border p-3 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{new Date(s.createdAt).toLocaleString()}</div>
                  <div className="text-sm text-gray-500">{s.note}</div>
                </div>
                <div className="font-bold">${s.total}</div>
              </div>
              <div className="mt-2">
                <ul className="text-sm text-gray-700">
                  {s.items.map(it => (
                    <li key={it.itemId}>{it.name} — {it.qty} × ${it.price}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}