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

export default router