require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/db')

const app = express()
app.use(cors())
app.use(express.json())

// connect to DB
connectDB()

// routes
app.use('/api/', require('./src/routes/items'))
app.use('/api/categories', require('./src/routes/categories'))
app.use('/api/sales', require('./src/routes/sales'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on', PORT))
