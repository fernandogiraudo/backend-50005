import mongoose from "mongoose";

const estudianteCollection = 'estudiantes';

const estudianteSchema = mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    apellido: {
        required: true,
        type: String
    },
    edad: {
        required: true,
        type: Number
    },
    dni : {
        required: true,
        type: String,
        unique: true
    },
    curso: {
        required: true,
        type: String
    },
    nota: {
        required: true,
        type: Number
    }
});

export const estudianteModel = mongoose.model(estudianteCollection, estudianteSchema);