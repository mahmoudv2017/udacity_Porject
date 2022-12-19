import express from "express";
import ImagesRoutes from "./api/images";

const Router = express.Router();

Router.use("/images" , ImagesRoutes);

Router.get("/" , (req,res) => {
    res.send("hello from api");
});

export default Router;