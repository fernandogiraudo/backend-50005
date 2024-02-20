import mongoose from "mongoose";

export default class MongoSingleton {
    static #instance;
    constructor(){
        mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');
    }
    static getInstance(){
        if(this.#instance){
            console.log('Instance already exists');
            return this.#instance;
        }
        this.#instance = new MongoSingleton();
        console.log('Connected');
        return this.#instance;
    }
}