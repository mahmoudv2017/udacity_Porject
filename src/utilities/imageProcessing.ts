import sharp from "sharp";
import path from "path";

const ImageProcess = async (
  filename: string,
  width: number,
  height: number
) => {
  const new_image =
    path.resolve("./images/thump/") + "/" + filename + "_thump.jpg";

  await sharp(path.resolve("./images/full/") + "/" + filename + ".jpg")
    .resize(width, height)
    .toFile(new_image); //

  return new_image;
};

export default ImageProcess;
