import jwt from "jsonwebtoken";
import secret from "../configs/secret.js";

function verifyJWT(req, res, next) {
  const token = req.headers.authorization
  jwt.verify(token, secret.key, async (err, decoded) => {
    if(err) return res.status(401).end()
    req.body.resi_id = decoded.id
    next()
  })
}

export default verifyJWT;