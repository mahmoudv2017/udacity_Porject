"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var Router = express_1.default.Router();
Router.use('/images', images_1.default);
Router.get("/", function (req, res) {
    res.send("hello from api");
});
exports.default = Router;
