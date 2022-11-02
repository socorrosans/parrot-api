import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Resident from "../models/Residents.js";
import secret from "../configs/secret.js";

const authController = {
  async login(req, res){
    const {email, password} = req.body

    const resident = await Resident.findOne({
      where: {
        email,
      }
    })

    if(!resident){
      res.status(404).json("residente não cadastrado")
    }

    const jwtoken = jwt.sign({
      id: resident.id,
      email: resident.email,
    }, secret.key)

    if(!bcryptjs.compareSync(password, resident.password)){
      return res.status(401).json("dados inválidos")
    }
    return res.status(200).json(jwtoken)
  }
}

export default authController;