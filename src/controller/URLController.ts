import { config } from "config/Constants";
import { Request, response, Response } from "express";
import shortId from 'shortid'

export class URLController {
    public async shorten(req:Request, res:Response):Promise<void>{
        const {originUrl} = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/$${hash}`
        response.json({originUrl, hash, shortURL});

    }

    public async redirect(req:Request, res:Response):Promise<void>{
        const {hash} = req.params;
        const url = {
            originUrl: 'asdfasdfasdf'
            , hash: 'qqqq'
            , shorURL: 'ççççç'
        }
        response.redirect(url.originUrl);
    }
}