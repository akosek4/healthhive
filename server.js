const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
//const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

//mongoose.connect("mongodb+srv://akosek4:secure123@hivehealth.wjceudi.mongodb.net/?retryWrites=true&w=majority&appName=HiveHealth");
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




//const Item = require("./models/Item"); // Create the Item model





app.get("/api/items", async (req, res) => {
  try {
    
    await client.connect();
// Send a ping to confirm a successful connection
    //const items = await Item.find();
   // res.send("test");
   //{"_id":{"$oid":"65ed44b3d3bd2e37a8591fd8"},"name":"Anxiety Disorder","comments":["Anonymous User: Exploring mindfulness meditation has been a game-changer in managing my anxiety. Taking just a few minutes each day to ground myself in the present moment has helped quiet the racing thoughts and bring a sense of peace to my mind.","Anonymous User: Dealing with an anxiety disorder isn't just about feeling nervous; it's a daily battle with irrational fears and overwhelming panic attacks. Simple tasks like going to the grocery store or answering the phone can trigger a tsunami of anxiety. But through mindfulness practices and medication, I'm gradually reclaiming control over my life.","Anonymous User: Taking the step to see a therapist for my anxiety was daunting, but it's been a lifeline. Having a safe space to unpack my worries and learn coping strategies has been invaluable in navigating the ups and downs of living with anxiety."],"text":"Any of various disorders (such as panic disorder, obsessive-compulsive disorder, a phobia, or generalized anxiety disorder) in which anxiety is a predominant feature."})
    const test = await client.db("health").collection("disease_collection").find().toArray()
   //console.log(test)
    res.json(test)
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));