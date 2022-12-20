import sharp from "sharp";

const ImageProcess = async (
  fullPath: string,
  thump_path: string,
  width: number,
  height: number
) => {
  //const thump_path = path.resolve("./images/thump/") + "/" + "argentine" +"_"+width+"_"+height+".jpg";

  try {
    await sharp(fullPath).resize(width, height).toFile(thump_path); //

    return thump_path;
  } catch (error) {
    return error;
  }
};

export default ImageProcess;
