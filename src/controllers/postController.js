import Post from "../models/Posts.js";
import Resident from "../models/Residents.js";

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
      const posts = await Post.findAll({
        include: [{
          model: Resident,
        }]
      })

      const allPosts = posts.map(post => {
        return {owner: post.Resident.name, email: post.Resident.email, apartment: post.Resident.apartment, post: post.post_content, created: post.created_at}
      })

      res.status(200).json(allPosts)
    } catch(error) {
      res.status(404).json(error)
    }
  },

  async listUserPost(req, res) {
    const {resi_id} = req.body
    try {
      const userPosts = await Post.findAll({
        where: {
          resident_id: resi_id
        },
        include: [{
          model: Resident,
        }]
      })

      const allUserPosts = userPosts.map(userPost => {
        return {owner: userPost.Resident.name, email: userPost.Resident.email, apartment: userPost.Resident.apartment, post: userPost.post_content, created: userPost.created_at}
      })

      if(allUserPosts.length == 0){ 
        res.status(200).json("Usuário ainda não fez publicações")
      } else {
        res.status(200).json(allUserPosts)
      }

    } catch(error){
      res.status(404).json(error)
    }
  }
}

export default postController;