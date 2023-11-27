import express from 'express'
import { register, login } from '../Controllers/chatController.js'

const router = express.Router()

router.post('/register', register)


export default router