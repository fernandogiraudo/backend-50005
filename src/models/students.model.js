import mongoose from "mongoose";

const studentCollection = 'students';

const studentSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'courses'
                }
            }
        ],
        default: []
    }
});

studentSchema.pre('find', function(){
    this.populate('courses.course');
});

export const studentModel = mongoose.model(studentCollection, studentSchema);
