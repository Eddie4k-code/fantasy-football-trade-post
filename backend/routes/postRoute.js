import express from 'express';
import { addPost, viewAll } from '../controllers/postController';

const postRouter = express.Router();

postRouter.post("/add", addPost);
postRouter.get("/get", viewAll);

export default postRouter;