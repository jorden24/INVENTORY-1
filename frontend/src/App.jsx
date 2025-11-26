import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import StockList from './pages/Inventory/StockList'
import AddItem from './pages/Inventory/AddItem'
import EditItem from './pages/Inventory/EditItem'
import Categories from './pages/Inventory/Categories'
import SalesList from './pages/Sales/SalesList'
import CreateSale from './pages/Sales/CreateSale'
import Reports from './pages/Reports/Reports'

export default function App(){
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/inventory" element={<StockList/>} />
          <Route path="/inventory/add" element={<AddItem/>} />
          <Route path="/inventory/edit/:id" element={<EditItem/>} />
          <Route path="/inventory/categories" element={<Categories/>} />
          <Route path="/sales" element={<SalesList/>} />
          <Route path="/sales/create" element={<CreateSale/>} />
          <Route path="/reports" element={<Reports/>} />
        </Routes>
      </main>
    </div>
  )
}
