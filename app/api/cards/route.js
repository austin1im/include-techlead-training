import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("cards");
        const collection = db.collection("card")
        const cardData = await collection.find({}).toArray(); //{<filter>}, no filter so everything, and then convert it to an array

        return NextResponse.json(cardData);
    }
    catch (e) {
        return NextResponse.json({error: e.message})
    }
    
}

export async function POST(request) {
    try {
        const data = await request.json();
        const {title, text} = data;
        const newCard = {title, text};

        const client = await clientPromise; 
        const db = client.db("cards");
        const collection = db.collection("card");

        const result = await collection.insertOne(newCard);
        
        return NextResponse.json({message: "Card successfully created!"}, {status: 201})
    }
    catch (e) {
        return NextResponse.json({error: e.message}, {status: 500})
    }
}