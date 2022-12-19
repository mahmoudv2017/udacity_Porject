import express from "express";
import logger from "../../utilities/logger";
import { promises as fs } from "fs";
import path from "path";
import ImageProcess from "./../../utilities/imageProcessing";

const Router = express.Router();

Router.get("/", logger, async (req, res) => {
  // const image = await fs.readFile('../../images/full/'+req.query.filename)

  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;

  try {
    const fuLL_path =
      path.resolve("./images/full/") + "/" + req.query.filename + ".jpg";

    //checks if the file exists
    await fs.access(fuLL_path);

    //proceeds to opening the file
    await fs.readFile(
      path.resolve("./images/thump/") + "/" + req.query.filename + "_thump.jpg"
    );

    //proceeds to resizing the image and writing it to the new directory
    const reponse = await ImageProcess(
      req.query.filename as string,
      Number(width),
      Number(height)
    );
    res.status(200).sendFile(reponse);
  } catch (error) {
    res.status(304).send("Bad request");
  }
});

export default Router;
