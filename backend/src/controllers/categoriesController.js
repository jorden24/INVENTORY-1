const Category = require('../models/Category')

exports.getAll = async (req, res) => {
  const cats = await Category.find()
  res.json(cats)
}

exports.create = async (req, res) => {
  const { name } = req.body
  const cat = await Category.create({ name })
  res.status(201).json(cat)
}

exports.remove = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id)
  res.json({ success: true })
}
