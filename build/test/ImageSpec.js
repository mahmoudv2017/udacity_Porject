"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageProcessing_1 = __importDefault(require("./../utilities/imageProcessing"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var fileExist_1 = __importDefault(require("../utilities/fileExist"));
describe("testing the Image Endpoints", function () {
    var request = (0, supertest_1.default)(index_1.default);
    describe("testing the success endpoint", function () {
        var Full_image_path = path_1.default.resolve("./images/full") + "/argentine.jpg";
        var output_dir = path_1.default.resolve("./images/thump/") +
            "/argentine_" +
            600 +
            "_" +
            700 +
            ".jpg";
        it("expects the images are cached", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect((0, fileExist_1.default)(output_dir)).toBeTrue();
                return [2 /*return*/];
            });
        }); });
        it("expects the imageProcessing(Full_image_path , output_dir , 600 , 700) to sucsseed in resizing the image", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, (0, imageProcessing_1.default)(Full_image_path, output_dir, 600, 700)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toEqual(output_dir);
                        return [2 /*return*/];
                }
            });
        }); });
        it("expects the images endpoint to successfully create the new resized image", function () { return __awaiter(void 0, void 0, void 0, function () {
            var reponse;
            return __generator(this, function (_a) {
                reponse = request.get("/api/images?filename=argentine&width=200&height=400");
                return [2 /*return*/, expectAsync(reponse).toBeResolved()];
            });
        }); });
    });
    describe("error handling endpoints", function () {
        describe("tests if the right parameters weren't missing ", function () {
            it("expects the images endpoint to throw an error", function () { return __awaiter(void 0, void 0, void 0, function () {
                var reponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request.get("/api/images?filename=sadnaksdn.png&width=200&height=400")];
                        case 1:
                            reponse = _a.sent();
                            return [2 /*return*/, expect(reponse.status).toBe(400)];
                    }
                });
            }); });
            it("expects the images endpoint to throw error because of too few parameters", function () { return __awaiter(void 0, void 0, void 0, function () {
                var reponse, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reponse = request.get("/api/images?filename=sadnaksdn.png&width=200");
                            _a = expect;
                            return [4 /*yield*/, reponse];
                        case 1:
                            _a.apply(void 0, [(_b.sent()).status]).toEqual(400);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe("tests if all parameters have the right values ", function () {
            it("expects the height is text to throw error", function () { return __awaiter(void 0, void 0, void 0, function () {
                var reponse, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reponse = request.get("/api/images?filename=argentine&width=0&height=asdasd");
                            _a = expect;
                            return [4 /*yield*/, reponse];
                        case 1:
                            _a.apply(void 0, [(_b.sent()).status]).toEqual(400);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("expects the width is text to throw error", function () { return __awaiter(void 0, void 0, void 0, function () {
                var reponse, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reponse = request.get("/api/images?filename=argentine&width=asdasd&height=400");
                            _a = expect;
                            return [4 /*yield*/, reponse];
                        case 1:
                            _a.apply(void 0, [(_b.sent()).status]).toEqual(400);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("expects the width or height if 0 to throw error", function () { return __awaiter(void 0, void 0, void 0, function () {
                var reponse, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reponse = request.get("/api/images?filename=argentine&width=0&height=400");
                            _a = expect;
                            return [4 /*yield*/, reponse];
                        case 1:
                            _a.apply(void 0, [(_b.sent()).status]).toEqual(400);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("expects the width or height if -1 to throw error", function () { return __awaiter(void 0, void 0, void 0, function () {
                var reponse, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reponse = request.get("/api/images?filename=argentine&width=0&height=-1");
                            _a = expect;
                            return [4 /*yield*/, reponse];
                        case 1:
                            _a.apply(void 0, [(_b.sent()).status]).toEqual(400);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
});
