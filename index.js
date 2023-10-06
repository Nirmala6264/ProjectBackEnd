import express from 'express'
import cors from 'cors'
import hallrouter from './Routers/hallBooking.router.js'
const app = express()
app.use(cors())
app.use(express.json())
               
const PORT = 4000;
app.use('/', (req,res) => {
    res.send("WELCOME TO HALLBOOKING APP")
})
app.use('/api',hallrouter)
app.listen(PORT, () => {
    console.log("App is Listening-",PORT);
})







