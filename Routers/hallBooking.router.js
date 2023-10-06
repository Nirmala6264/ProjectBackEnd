import express from 'express'
import {getAllRooms,createRooms,bookingRoom,getAllBookedRooms,getAllCustomers,getCustomerByName } from '../Controllers/hallBooking.controller.js';
const router = express.Router()

router.get('/rooms/all', getAllRooms)
router.post('/rooms/create', createRooms)
router.post('/booking/create/:id', bookingRoom)
router.get('/viewbooking', getAllBookedRooms)
router.get('/customers', getAllCustomers)
router.get('/customer/:name',getCustomerByName)


export default router;