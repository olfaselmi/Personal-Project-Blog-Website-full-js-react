import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router); //http: //localhost:5000/api/user/login
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://olfaselmi:olfaselmi@cluster0.vlg32hr.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected To Database and Listening to localhost 5000")
  )
  .catch((err) => console.log(err));
