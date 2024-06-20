import mongoose from "mongoose";
import bcrypt from "bcrypt";

import UserModel from "../models/User.js";
import PostModel from "../models/Post.js";
import posts from './somonPosts.json' assert {type: 'json'};

mongoose
    .connect('mongodb://localhost:27017/somon')
    .then(() => console.log('DB ok'))
    .catch(err => console.log(err));

const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash('12345', salt);

const user = new UserModel({
    name: 'parviz',
    phone: 928283352,
    passwordHash: hash
})
const userId = user._id
await user.save()

posts.forEach(async (data) => {
    const {_id, viewsCount, user, createdAt, updatedAt, __v, ...doc} = data;
    doc.user = userId
    const post = new PostModel(doc);
    await post.save()
})
