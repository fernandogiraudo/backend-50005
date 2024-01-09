import mongoose from "mongoose";

const courseCollection = 'courses';

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    difficulty: {
        type: Number,
        required: true
    },
    topics: {
        type: Array,
        default: []
    },
    professor: String,
    students: {
        type: Array,
        default: []
    }
});

export const courseModel = mongoose.model(courseCollection, courseSchema);