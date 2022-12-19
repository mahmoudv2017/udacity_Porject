
import express from 'express'

function logger(req:express.Request,res:express.Response,next:Function){


    if (!req.query.width || !req.query.height || !req.query.filename) { res.status(304).send("Bad Request") }
    next();

}

export default logger