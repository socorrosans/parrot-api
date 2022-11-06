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
  },

  async listPosts(req, res) {
    try {
      const posts = await Post.findAll()
      res.status(200).json(posts)
    } catch(error) {
      res.status(404).json(error)
    }
  },

  async listPostsUser(req, res) {
    const {resi_id} = req.body
    try {
      const postsUser = await Post.findAll({
        where: {
          resident_id: resi_id
        }
      })
      res.status(200).json(postsUser)

    } catch(error){
      res.status(404).json(error)
    }
  }

}

export default postController;