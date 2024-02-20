import MongoSingleton from "./mongoSingleton.js";

const mongoInstance = MongoSingleton.getInstance();

const anotherMongoInstance = MongoSingleton.getInstance();

console.log(mongoInstance === anotherMongoInstance);