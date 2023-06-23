import express, { Application, NextFunction, Request, Response } from 'express'
import rutas_ejemplo from './routes/rutas_ejemplo'
import dotenv from 'dotenv'
dotenv.config()
import rutas_auth from './routes/authRoutes'


//1.Crear un objeto express
const app:Application = express()

//1.1 Emplear las rutas 

app.use('/auth',rutas_auth)
app.use('/', rutas_ejemplo)

//2.Respuesta cuando el recurso no existe
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:"Upss!!! Lo que pidió no existe!!!"})
})

//3.Respuesta cuando existe un error de servidor


export  default app