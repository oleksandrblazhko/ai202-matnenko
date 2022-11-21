import { client, db } from './user.js'

//вивід списків композицій, скомпонованих за жанром

async function searchCompose (requestID, request) {
  if ((requestID !== 0 || requestID !== 1) && (request.length < 1 || request.length > 64)) {
    return -3
  }
  if (requestID !== 0 || requestID !== 1) {
    return -1
  }
  if (request.length < 1 || request.length > 64) {
    return -2
  }
  await client.connect()
  const db = client.db('Project')
  const collection = await db.collection('Списки композицій, скомпоновані за жанром')
  const composeList = await collection.find().toArray()
  await client.close()
  return composeList
}

//вивід обраної користувачем композиції
async function selectCompose (composeList, request) {
   await client.connect()
   const db = client.db('Project')
   const collection = await db.collection("Обрана композиція")
   Composition composition = await collection.find()
   await client.close()
   return composition
}
