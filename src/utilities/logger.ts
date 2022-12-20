

import express from "express";

async function logger(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!req.query.width || !req.query.height || !req.query.filename) {
    res.status(400).send("few params");
  } else {
    if (
      Number(req.query.height) <= 0 ||
      Number(req.query.width) <= 0 ||
      !Number(req.query.height) ||
      !Number(req.query.width)
    ) {
      res.status(400).send("Wrong Params");
    } else {
      next();
    }
  }
}

export default logger;
