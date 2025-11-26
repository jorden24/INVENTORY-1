const Sale = require('../models/Sale')
const Item = require('../models/item')

exports.getAll = async (req, res) => {
  const sales = await Sale.find().populate('items.item')
  res.json(sales)
}

exports.create = async (req, res) => {
  const { items } = req.body // [{ itemId, qty }]
  let total = 0
  const saleItems = []

  for (const it of items) {
    const itemDoc = await Item.findById(it.itemId)
    if (!itemDoc) continue
    const price = itemDoc.price
    const qty = Number(it.qty)
    total += price * qty
    saleItems.push({ item: itemDoc._id, qty, price })
    // reduce stock
    itemDoc.stock = Math.max(0, itemDoc.stock - qty)
    await itemDoc.save()
  }

  const sale = await Sale.create({ items: saleItems, total })
  res.status(201).json(sale)
}

exports.getBetween = async (req, res) => {
  const { from, to } = req.query
  const fromDate = new Date(from)
  const toDate = new Date(to)
  const sales = await Sale.find({ createdAt: { $gte: fromDate, $lte: toDate } })
  res.json(sales)
}