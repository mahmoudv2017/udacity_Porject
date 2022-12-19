import sharp from "sharp";
import fs from "fs";
import path from "path";

const ImageProcess = async (
  fullPath: string,
  thump_path:string,
  width: number,
  height: number
) => {

  //const thump_path = path.resolve("./images/thump/") + "/" + "argentine" +"_"+width+"_"+height+".jpg";


  await sharp(fullPath)
    .resize(width, height)
    .toFile(thump_path)
    .catch(err => console.log(err)); //

  return thump_path;

  
};

export default ImageProcess;
