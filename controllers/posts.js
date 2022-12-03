import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try{
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);

    }catch(err){
        res.status(404).json({message: err.message})
    }
};

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(409).json({message: err.message})
    }
};