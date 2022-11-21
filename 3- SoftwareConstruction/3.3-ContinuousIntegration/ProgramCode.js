// код перероблено під невірний вигляд

import { mongoClient, user } from './user.js'

//вивід списків компощицій, скомпонованих за жанром
async function searchCompose(request_ID, request) {
    if ((request_ID != 0 || request_ID != 1) && (request.length < 1 || request.length > 64)) {
        return -3;
    }
    if (request_ID != 0 || request_ID != 1) {
        return -1;
    }
    if (request.length < 1 || request.length > 64) {
        return -2
    }
    await client.connect();
    const db = client.db('Project');
    const collection = await db.collection("Списки композицій, скомпоновані за жанром");
    const composeList = await collection.find().toArray();
    await client.close();
    return composeList;
}

let requestID = 1;
let author = "Вербицький";

//вивід списків композицій заданого автора, скомпонованих за жанром
ComposeList musicList = searchCompose(requestID, author)
