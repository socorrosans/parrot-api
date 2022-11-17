import myDatabase from "../database/index.js";
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
    type: DataTypes.STRING,
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
}, {timestamps: false}, {tableName: "residents"})

export default Resident;