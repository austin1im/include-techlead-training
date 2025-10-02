import { MongoClient } from "mongodb";

const uri = process.env.MONGODBURI //process is used to get the information generated at run time

let client;
let clientPromise;

if (!process.env.MONGODBURI) {
    throw new Error("Missing MongoDB URI")
}

if (process.env.NODE_ENV === "development") { //tells framework what mode its running in
    if (!global.mongoClientPromise) { //global is since it can be accessed again on hot reloads
        client = new MongoClient(uri); 
        try {
            global.mongoClientPromise = client.connect(); //create a mongoClientPromise & connect 
        }
        catch (e) {
            console.error("MongoDB connection error", e.message)
        } 
    }
    clientPromise = global.mongoClientPromise;
}
else {
    client = new MongoClient(uri);
    try {
        clientPromise = client.connect()
    }
    catch (e) {
        console.error("MongoDB connection error", e.message)
    }
}

export default clientPromise;