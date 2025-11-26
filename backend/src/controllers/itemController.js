const Item = require('../models/item')   
const Category = require('../models/Category')

exports.getAll = async (req, res) => {
  const items = await Item.find().populate('category')
  res.json(items)
}

exports.create = async (req, res) => {
  const { name, categoryId, stock = 0, price = 0 } = req.body
  const item = await Item.create({ name, category: categoryId || null, stock, price })
  res.status(201).json(item)
}

exports.update = async (req, res) => {
  const id = req.params.id
  const updated = await Item.findByIdAndUpdate(id, req.body, { new: true })
  res.json(updated)
}

exports.remove = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id)
  res.json({ success: true })
}