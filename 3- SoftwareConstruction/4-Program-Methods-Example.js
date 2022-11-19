import { mongoClient, user } from './user.js'

//вивід списків компощицій, скомпонованих за жанром
async function searchCompose(request_ID, request) {
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
    console.log(composeList);
    return composeList;
}

//вивід обраної користувачем композиції
async function selectCompose(composeList, request) {
    await client.connect();
    const db = client.db('Project');
    const collection = await db.collection("Обрана композиція");
    Composition composition = await collection.find();
    await client.close();
    console.log(composition);
    return composition
}
