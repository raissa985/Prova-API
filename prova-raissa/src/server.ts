import express from 'express'
import {config} from 'dotenv'
import { app } from './app'
config()




app.listen(process.env.PORT, () =>{
    console.log('Servidor rodando na porta: ', process.env.PORT)
})
