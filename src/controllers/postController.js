import Post from "../models/Posts.js";
import jwt from "jsonwebtoken";
import secret from "../configs/secret.js";
import authController from "./authController.js";

const postController = {
  async publication(req, res){
    try {
      const {post_content} = req.body
      const post = await Post.create({
      post_content,
      resident_id: 1
    })
    res.status(201).json(post_content)
    
    } catch (error) {
      res.status(400).json(error.errors[0].message)
    }
  }
}

export default postController;