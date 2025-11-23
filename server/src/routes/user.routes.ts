import express from 'express'
import { deleteUser, getAlltheUsers, getUsers, updateUser } from '../controllers/user.controller'
import protectRoutes from '../midldeware/protectRoutes'

const router = express.Router()

router.get("/",protectRoutes,getAlltheUsers)
router.get('/:id',protectRoutes,getUsers)
router.patch("/:id",protectRoutes,updateUser)
router.delete("/:id",protectRoutes,deleteUser)

export default router