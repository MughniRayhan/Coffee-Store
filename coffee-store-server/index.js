const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// tYAfIX9sEXUyb7SU
// coffee_monster
// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.iuxl4dg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iuxl4dg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
   
    await client.connect();

    const coffeeCollection = client.db('coffeeDB').collection('coffees');
 
    app.get('/coffees', async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post('/coffees', async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Coffee server is getting hotter!');
});

app.listen(port, () => {
  console.log(`Coffee server is running on port ${port}`);
}   );