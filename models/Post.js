import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number
    },
    city: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    features: {
        type: Object,
        default: {}
    },
    tags: {
        type: Array,
        required: true    
    },
    bargain: {
        type: Boolean,
        required: true
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
});

export default mongoose.model('Post', PostSchema);