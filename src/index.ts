import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection';
import express, { Request, Response } from 'express'

const api = express()
api.use(express.json())

const urlController = new URLController();

const database = new MongoConnection();
database.connection()

api.post('/shorten',urlController.shorten)
api.get('/:hash',urlController.redirect)

api.listen(3000, ()=>console.log('Express Listening'))