const mongoose = require('mongoose')

const SaleSchema = new mongoose.Schema({
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      qty: Number,
      price: Number
    }
  ],
  total: Number,
  note: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Sale', SaleSchema)