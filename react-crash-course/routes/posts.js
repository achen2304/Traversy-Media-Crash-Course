import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controlers/postControllers.js';
const router = express.Router();

//all posts
router.get('/', getPosts);

//singe post
router.get('/:id', getPost);

//create new post
router.post('/', createPost);

// update post
router.put('/:id', updatePost);

// delete post
router.delete('/:id', deletePost);

export default router;
