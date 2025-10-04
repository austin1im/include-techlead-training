import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

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
        
        return NextResponse.json({_id: result.insertedId, ...newCard}, {status: 201})
    }
    catch (e) {
        return NextResponse.json({error: e.message}, {status: 500})
    }
}

export async function PATCH(request) {
    try {
        const data = await request.json();
        const {title, text, id} = data;

        const updateFields = {};
        if (title) {updateFields.title = title}
        if (text) {updateFields.text = text} 

        const client = await clientPromise; 
        const db = client.db("cards");
        const collection = db.collection("card");

        const result = await collection.updateOne(
            {_id: new ObjectId(id)},
            {$set: updateFields}
        )

        return NextResponse.json({status:200})
    }
    catch (e) {
        return NextResponse.json({error: e.message}, {status: 500})
    }
}

export async function DELETE(request) {
    try {
        const data = await request.json()
        const id = data
        const objectId = new ObjectId(id)

        const client = await clientPromise;
        const db = client.db("cards");
        const collection = db.collection("card");

        const result = await collection.deleteOne({
            _id: objectId
        });

        return NextResponse.json({ message: "Card deleted"}, { status: 200 });
    }
    catch (e) {
        return NextResponse.json({ error: e.message}, { status: 500 });
    }
}