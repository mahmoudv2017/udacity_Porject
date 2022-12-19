"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var FileExist = function (path) {
    try {
        fs_1.default.accessSync(path);
        return true;
    }
    catch (_a) {
        return false;
    }
};
exports.default = FileExist;
