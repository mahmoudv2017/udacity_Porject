"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    if (!req.query.width || !req.query.height || !req.query.filename) {
        res.status(304).send("Bad Request");
    }
    next();
}
exports.default = logger;
