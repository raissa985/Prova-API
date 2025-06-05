import express from 'express'
import userController from './controllers/userController'
import { loginController } from './controllers/loginController'
import { verifyTokenMiddleware } from './middelwares/verifyTokenMiddleware'

export const router =  express.Router()

router.get('/', userController.getAll)
router.get('/user/:id', userController.getById)

router.post('/user', userController.createUser)
router.post('/login', loginController)

router.put('/user/:id', userController.editUser)

router.delete('/user/:id', userController.removeUser)
