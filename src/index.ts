import { URLController } from 'controller/URLController'
import express, { Request, Response } from 'express'

const api = express()
api.use(express.json())

const urlController = new URLController();

api.post('/shorten',urlController.shorten)
api.get('/:hash',urlController.redirect)

api.get('/teste',(req: Request, res: Response)=>{
    res.json({success:true})
})

api.listen(3000, ()=>console.log('Express Listening'))