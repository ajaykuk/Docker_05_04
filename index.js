import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();
const PORT = 4000;
//const url = 'mongodb://localhost:27017';
const url = 'mongodb://host.docker.internal:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'testDB';

async function main() {
  await client.connect();
  console.log('Connected successfully to MongoDB');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return 'done.';
}

main().catch(console.error);

app.get('/', (req, res) => {
    res.json("I love this docker new container");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});