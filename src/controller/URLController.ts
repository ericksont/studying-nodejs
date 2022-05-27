import { config } from "../config/Constants";
import { Request, response, Response } from "express";
import shortId from 'shortid'
import { UrlModel } from "../database/model/Url";

export class URLController {
    public async shorten(req:Request, res:Response):Promise<void>{
        const {originUrl} = req.body
        const url = await UrlModel.findOne({originUrl})
        if(url){
            response.json(url)
            return
        }
        const hash = shortId.generate()
        const shortUrl = `${config.API_URL}/$${hash}`
        const newUrl = await UrlModel.create({originUrl, hash, shortUrl})
        response.json(newUrl);

    }

    public async redirect(req:Request, res:Response):Promise<void>{
        const {hash} = req.params;
        const url = await UrlModel.findOne({hash})
        if(url){
            response.redirect(url.originUrl);
            return
        }
        response.status(400).json({error:'Url not found'})
    }
}