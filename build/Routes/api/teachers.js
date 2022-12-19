"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./../../utilities/logger"));
var Router = express_1.default.Router();
Router.get("/", logger_1.default, function (req, res) {
    console.log(req.path);
    res.send("Teachers Route");
});
exports.default = Router;
