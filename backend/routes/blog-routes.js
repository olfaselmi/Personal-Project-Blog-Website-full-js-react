import express from 'express';
import { getByUserId, deleteBlog, getById, getAllBlogs, addblog, updateBlog } from '../controllers/blog-controller';
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addblog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserId);
export default blogRouter;