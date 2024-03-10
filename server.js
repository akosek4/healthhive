const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://akosek4:secure123@hivehealth.wjceudi.mongodb.net/?retryWrites=true&w=majority&appName=HiveHealth"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
  }
}
);

app.get("/api/items", async (req, res) => {
  try {
    await client.connect();
    const test = await client.db("health").collection("disease_collection").find().toArray()
    res.json(test)
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));