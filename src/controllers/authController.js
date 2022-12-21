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
      return res.status(401).json("E-mail não cadastrado, verifique seu e-mail!")
    }

    const jwtoken = jwt.sign({
      id: resident.resident_id,
      email: resident.email,
    }, secret.key)

    if(!bcryptjs.compareSync(password, resident.password)){
      return res.status(401).json("Dados inválidos, verifique sua senha!")
    } else {
      return res.status(200).json({token: jwtoken, user: resident.name, id: resident.resident_id, apartment: resident.apartment, email: resident.email})
    }
  }
}

export default authController;