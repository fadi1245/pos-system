import express from 'express';
import { loginUser, signUpUser } from '../controllers/userAuth.controller';


const router = express.Router();

router.post('/register',signUpUser)
router.post('/login',loginUser)

export default router