const express = require("express");
const jwt = require("jsonwebtoken");

/**
 * @param {express.Request} req
 * @param {*} res
 * @param {*} next
 */
module.exports = function (req, res, next) {
 
  const bearerToken = req.header("Authorization");

  if (!bearerToken) {
    return res.status(401).send("Missing Token");
  }

  const token = bearerToken.split(" ")[1];
 
  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

  req["user"] = jwtPayload

  next();
};
