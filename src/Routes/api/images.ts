import express from "express";
import logger from "../../utilities/logger";
import path from "path";
import ImageProcess from "./../../utilities/imageProcessing";
import FileExist from "./../../utilities/fileExist";

const Router = express.Router();

Router.get("/", logger, async (req:express.Request, res:express.Response) : Promise<void> => {
  // const image = await fs.readFile('../../images/full/'+req.query.filename)

  const width:string = req.query.width as unknown as string;
  const height:string = req.query.height as unknown as string;

  const fuLL_path:string =
    path.resolve("./images/full/") + "/" + req.query.filename + ".jpg";

  const thump_path:string =
    path.resolve("./images/thump/") +
    "/" +
    req.query.filename +
    "_" +
    width +
    "_" +
    height +
    ".jpg";

  //checks if the file exists
  if (FileExist(thump_path)) {
    res.status(200).sendFile(thump_path);
  } else {
    if (FileExist(fuLL_path)) {
      console.log("somthing");
      const reponse = await ImageProcess(
        fuLL_path,
        thump_path,
        Number(width),
        Number(height)
      );

      res.status(200).sendFile(reponse as string);
    } else {
      res.status(400).send("<h1>Bad Request</h1>");
    }
  }
});

export default Router;
