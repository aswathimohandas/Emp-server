require('dotenv').config()

const express=require('express')
const cors=require('cors')
const routes = require('./Routes/route')
const empServer=express()
require('./connection/db')


empServer.use(cors())
empServer.use(express.json())
empServer.use(routes)


const PORT=3000 || Process.env.PORT

empServer.listen(PORT,()=>{
    console.log(`server running at :${PORT}`);
    
})