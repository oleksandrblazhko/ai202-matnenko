// редагуємо код у відповідності до коментаріїв на минулому рис. так, щоб він відповідав вимогам

import { client, db } from './user.js'

// вивід списків композицій, скомпонованих за жанром

async function searchCompose (requestID, request) {
  if ((request_ID != 0 || request_ID != 1) && (request.length < 1 || request.length > 64)) {
    return -3;
  }
  if (requestID !== 0 || requestID !== 1) {
    return -1
  }
  if (request.length < 1 || request.length > 64) {
    return -2
  }
  await client.connect()
  client.db('Project')
  const collection = await db.collection('Списки композицій, скомпоновані за жанром')
  const composeList = await collection.find().toArray()
  await client.close()
  return composeList
}

const requestID = 1
const author = 'Вербицький'

// вивід списків композицій заданого автора, скомпонованих за жанром

console.log(searchCompose(requestID, author))
