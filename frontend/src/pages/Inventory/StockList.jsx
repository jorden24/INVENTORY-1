import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import api from '../../lib/mockApi'
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function StockList(){
  const [Items, setItems] = useState([])
  useEffect(()=>{ api.get('/items').then(r=>setItems(r.data)).catch(()=>{}) },[])

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Stock List</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full table-auto">
            {/* ... */}
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
