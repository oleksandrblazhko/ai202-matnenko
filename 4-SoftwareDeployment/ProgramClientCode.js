const { MongoClient, ServerApiVersion } = require('mongodb');

const client = {
  "id":"1",
  "login":"Prokop",
  "e-mail":"Prokop@gmail.com",
  "secret_key":"5e0dd59c8686b2ed36a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004"}
;

class DataBase {
    async init() {
        const mongoClient = await new MongoClient('mongodb://admin:admin@localhost:28003/project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1
        }).connect();

        this.messages = mongoClient.db('project').collection('messages');
    }

    async newMessage(msg) {
        try {
            await this.messages.insertOne(msg);

            return { ok: true };
        } catch (e) {
            return { ok: false };
        }
    }
}

const db = new DataBase();

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

async function test() {
    await db.init();

    console.log('TC1.1: ');
    if (await searchCompose(1, "Гімн України") == 1) console.log('Passed!')
    else console.log('Failed...');

    console.log('TC1.2: ');
    if (await searchCompose(3, "Гімн України") == -1) console.log('Passed!')
    else console.log('Failed...');

    console.log('TC1.3: ');
    if (await searchCompose(1, "Duis aute ... qui blanditii praesentium voluptatum deleniti atque...") == -2) console.log('Passed!');
    else console.log('Failed...');

    console.log('TC1.4: ');
    if (await searchCompose(3, "Duis aute ... qui blanditii praesentium voluptatum deleniti atque...") == -3) console.log('Passed!');
    else console.log('Failed...');
}

console.log('Test:');
test();
