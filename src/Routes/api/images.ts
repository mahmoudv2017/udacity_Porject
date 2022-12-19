import express from 'express';
import logger from '../../utilities/logger';
import { promises as fs } from 'fs'
import sharp from "sharp"
import path from 'path'

const Router = express.Router();

Router.get("/", logger, async (req, res) => {

    // const image = await fs.readFile('../../images/full/'+req.query.filename)
  

    const width = (req.query.width as unknown) as string
    const height = (req.query.height as unknown) as string


    try {

        //checks if the file exists
        await fs.access(path.resolve('./images/full/') + "/" + req.query.filename + '.jpg')

        //proceeds to opening the file
        await fs.open(path.resolve('./images/thump/') + "/" + req.query.filename + '_thump.jpg', "w+")

        //proceeds to resizing the image and writing it to the new directory
        sharp(path.resolve('./images/full/') + "/" + req.query.filename + '.jpg')
            .resize({ width: Number(width), height: Number(height) })
            .toFile(path.resolve('./images/thump/') + "/" + req.query.filename + '_thump.jpg')
            .then((_) => {
                res.sendFile(path.resolve('./images/thump/') + "/" + req.query.filename + '_thump.jpg')
            })
            .catch(err => {
                res.status(304).send(err);
            })

        
    } catch (error) {

        res.status(304).send("Bad request")

    }













})

export default Router