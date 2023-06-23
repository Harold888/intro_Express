import express,{ Router, Request, Response } from "express"

const router:Router = Router()

//1. Definir las rutas 
router.get(
    '/mensaje',
    (req:Request, res:Response)=>{
        res.send('Hoy es un dia fabuloso!!')
    }
)
router.get(
    '/despedida',
    (req:Request, res:Response)=>{
        res.send('Hasta pronto!!')
    }
)
router.get(
    '/aleatorio',
    (req:Request, res:Response)=>{
        const min = 1;
        const max = 10;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        res.send(randomNumber.toString())
    }
)
export default router