import myDatabase from "../database";
import { DataTypes } from "sequelize";

const Resident = myDatabase.define("Resident", {
  resident_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  apartment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link_photo: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

export default Resident;