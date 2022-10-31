import myDatabase from "../database";
import { DataTypes } from "sequelize";
import Resident from "./Residents";

const Post = myDatabase.define("Post", {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resident_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Resident,
      key: resident_id
    }
  }
}, {timestamps: false}, {tableName: "posts"})

export default Post;