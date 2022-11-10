import myDatabase from "../database/index.js";
import { DataTypes } from "sequelize";
import Resident from "./Residents.js";

const Post = myDatabase.define("Post", {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  post_content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE
  },
  resident_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Resident,
      key: "resident_id"
    }
  }
}, {timestamps: false}, {tableName: "posts"})

Post.belongsTo(Resident, {
  foreignKey: "resident_id"
})

export default Post;