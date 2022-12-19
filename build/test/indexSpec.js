"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
describe("tests the endpoints", function () {
    var request = (0, supertest_1.default)(index_1.default);
    it("expects the images endpoint to throw an error", function (done) {
        request.get("/api/images?filename=sadnaksdn.png&width=200&height=400")
            .then(function (res) {
            expect(res.status).toEqual(304);
            console.log(res.text);
            done();
        });
    });
    it("expects the images endpoint to throw error because of too few parameters", function (done) {
        request.get("/api/images?filename=sadnaksdn.png&width=200")
            .then(function (res) {
            expect(res.status).toEqual(304);
            console.log(res.text);
            done();
        });
    });
    it("expects the images endpoint to successfully create the new resized image", function (done) {
        request.get("/api/images?filename=argentine&width=200&height=400")
            .then(function (res) {
            expect(res.status).toEqual(200);
            done();
        });
    });
});
