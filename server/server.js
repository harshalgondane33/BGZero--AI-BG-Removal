import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/mongoDB.js'
//app configs   
const PORT = process.env.PORT || 4000
const app=express()

await connectDB()
//middleware
app.use(cors())
app.use(express.json())

//api routes
app.get('/',(req,res) => res.json(`API working`))

app.listen(PORT,()=> console.log(`server is running on port ${PORT}`))