import express from 'express'
import { clerkWebHooks, paymentRazorpay, userCredits, verifyRazaorpay } from '../controllers/userController.js'
import authUser from '../middleware/auth.js'

const userRouter=express.Router()

userRouter.post('/webhooks',clerkWebHooks)
userRouter.get('/credits',authUser,userCredits)
userRouter.post('/pay-razor',authUser,paymentRazorpay)
userRouter.post('/verify-razor',verifyRazaorpay)
export default userRouter;