import ImageProcess from "./../utilities/imageProcessing";
import path from "path";
import app from "../index";
import supertest from "supertest";
import FileExist from "../utilities/fileExist";

describe("testing the Image Endpoints", () => {
  const request = supertest(app);

  describe("testing the success endpoint", () => {
    const Full_image_path = path.resolve("./images/full") + "/argentine.jpg";

    const output_dir =
      path.resolve("./images/thump/") +
      "/argentine_" +
      600 +
      "_" +
      700 +
      ".jpg";

    it("expects the images are cached", async () => {
      expect(FileExist(output_dir)).toBeTrue();
    });

    it("expects the imageProcessing(Full_image_path , output_dir , 600 , 700) to sucsseed in resizing the image", async () => {
      expect(await ImageProcess(Full_image_path, output_dir, 600, 700)).toEqual(
        output_dir
      );
    });

    it("expects the images endpoint to successfully create the new resized image", async () => {
      const reponse = request.get(
        "/api/images?filename=argentine&width=200&height=400"
      );

      return expectAsync(reponse).toBeResolved();
    });
  });

  describe("error handling endpoints", () => {
    describe("tests if the right parameters weren't missing ", () => {
      it("expects the images endpoint to throw an error", async () => {
        const reponse = await request.get(
          "/api/images?filename=sadnaksdn.png&width=200&height=400"
        );

        return expect(reponse.status).toBe(400);
      });

      it("expects the images endpoint to throw error because of too few parameters", async () => {
        const reponse = request.get(
          "/api/images?filename=sadnaksdn.png&width=200"
        );
        expect((await reponse).status).toEqual(400);
      });
    });

    describe("tests if all parameters have the right values ", () => {
      it("expects the height is text to throw error", async () => {
        const reponse = request.get(
          "/api/images?filename=argentine&width=0&height=asdasd"
        );
        expect((await reponse).status).toEqual(400);
      });

      it("expects the width is text to throw error", async () => {
        const reponse = request.get(
          "/api/images?filename=argentine&width=asdasd&height=400"
        );
        expect((await reponse).status).toEqual(400);
      });

      it("expects the width or height if 0 to throw error", async () => {
        const reponse = request.get(
          "/api/images?filename=argentine&width=0&height=400"
        );
        expect((await reponse).status).toEqual(400);
      });

      it("expects the width or height if -1 to throw error", async () => {
        const reponse = request.get(
          "/api/images?filename=argentine&width=0&height=-1"
        );
        expect((await reponse).status).toEqual(400);
      });
    });
  });
});
