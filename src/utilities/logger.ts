/* eslint-disable @typescript-eslint/ban-types */

import express from "express";

async function logger(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  if (!req.query.width || !req.query.height || !req.query.filename) {
    res.status(304).send("few params");
  } else {
    if (
      req.query.width == "0" ||
      req.query.width == "-1" ||
      req.query.height == "0" ||
      req.query.height == "-1" ||
      !Number(req.query.height )||
      !Number(req.query.width )
    ) {
      res.status(304).send("Wrong Params");
    } else {
      next();
    }
  }
}

export default logger;
