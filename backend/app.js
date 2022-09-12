import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRouter from './routes/postRoute';

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api/post", postRouter);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connected");
});


const server = app.listen(process.env.PORT, () => {
    console.log("Connected to Server and db");
});
