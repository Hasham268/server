import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import postRoutes from "./routes/posts.js";
const app = express();

app.use(bodyParser.json({limit: "30mb", extented: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extented: true}))
app.use(cors())

app.use('/posts', postRoutes)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));
