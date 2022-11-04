import Resident from "../models/Residents.js";
import bcryptjs from "bcryptjs";

const registerController = {
  async registerResident(req, res){
    const {name, email, password, apartment, link_photo} = req.body
    const cryptPassword = await bcryptjs.hashSync(password, 10)

    const newResident = Resident.create({
      name, 
      email,
      password: cryptPassword,
      apartment,
      link_photo
    })

    res.status(201).json("residente cadastrado")
  }
}

export default registerController;