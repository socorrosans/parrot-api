import Post from "../models/Posts.js";

const postController = {
  async publication(req, res) {
    try {
      const { post_content, resi_id } = req.body
      await Post.create({
        post_content,
        resident_id: resi_id
      })
      res.status(201).json(post_content)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

export default postController;