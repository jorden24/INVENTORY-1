import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../lib/mockApi'

export default function EditItem(){
  const { id } = useParams()
  const nav = useNavigate()
  const [item, setItem] = useState(null)
  const [cats, setCats] = useState([])
  useEffect(()=>{
    api.getItems().then(list => setItem(list.find(i=>i._id===id)))
    api.getCategories().then(setCats)
  },[id])

  if (!item) return <div>Loading...</div>

  const save = async (e) => {
    e.preventDefault()
    await api.updateItem(item._id, item)
    nav('/inventory')
  }

  return (
    <div className="max-w-xl white-card">
      <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
      <form onSubmit={save} className="space-y-3">
        <input value={item.name} onChange={e=>setItem({...item, name: e.target.value})} className="w-full p-2 border rounded" />
        <select value={item.category} onChange={e=>setItem({...item, category: e.target.value})} className="w-full p-2 border rounded">
          {cats.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}
        </select>
        <input type="number" value={item.price} onChange={e=>setItem({...item, price: Number(e.target.value)})} className="w-full p-2 border rounded" />
        <input type="number" value={item.stock} onChange={e=>setItem({...item, stock: Number(e.target.value)})} className="w-full p-2 border rounded" />
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={()=>nav('/inventory')} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  )
}
