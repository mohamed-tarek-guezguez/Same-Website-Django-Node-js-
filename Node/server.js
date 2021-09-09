const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const tasks = require('./routes/tasks')

dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/tasks', tasks)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})