import app from "../index";
import supertest from "supertest";

describe("tests the endpoints", () => {
  const request = supertest(app);

  describe("testing the first endpoints", () => {
    it("expects the api endpoint", async () => {
      const reponse = request.get("/api");

      return expectAsync(reponse).toBeResolved();
    });
  });
});
