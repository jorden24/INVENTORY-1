import React, {useEffect, useState} from 'react'
import  api  from '../../lib/mockApi'


export default function Categories(){
const [cats, setCats] = useState([])
const [name, setName] = useState('')
useEffect(()=>{ api.getCategories().then(setCats) },[])


const add = async () => { const c = await api.addCategory(name); setCats([...cats, c]); setName('') }
const remove = async (id) => { await api.deleteCategory(id); setCats(cats.filter(c => c._id !== id)) }


return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="white-card">
<h3 className="font-semibold mb-3">Categories</h3>
<ul>
{cats.map(c => (
<li key={c._id} className="flex justify-between border-b p-2">{c.name} <button onClick={() => remove(c._id)} className="text-red-600">Delete</button></li>
))}
</ul>
</div>
<div className="white-card">
<h3 className="font-semibold mb-3">Add Category</h3>
<input value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 border rounded" placeholder="Category name" />
<button onClick={add} className="mt-3 bg-blue-600 text-white px-3 py-2 rounded">Add</button>
</div>
</div>
)
}