"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./Routes/index"));
var app = (0, express_1.default)();
app.use("/api", index_1.default);
app.get("/", function (req, res) {
    res.send("hello world");
});
app.listen(5000, function () { return console.log("listening on http://localhost:5000"); });
exports.default = app;
