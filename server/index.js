// Import dependencies.
const bodyParser = require("body-parser");
const express = require("express");
const mongo = require("mongodb");
const objects = require("./objects");

// Endpoint settings.
const PORT = 80;
const HOST = "0.0.0.0";

// Get the Mongo client instance.
const MongoClient = mongo.MongoClient;

// Connect to the Mongo instance.
MongoClient.connect("mongodb://localhost:27017/school-of-motion", (err, client) => {
  // Quit if an error occurred.
  if (err) {
    console.log("A problem occurred while trying to connect to Mongo");
    console.log(err);
    return;
  }

  // Get the database hook. Quit if it can't be found.
  const db = client.db("school-of-motion");
  if (!db) {
    console.log("Failed to find the School of Motion database");
    return;
  }

  // Setup the express instance.
  const app = express();

  // Setup the body parser for JSON parsing.
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  // Gets the subscription list.
  app.get("/subscription", (req, res) => {
    // Get the subscriptions.
    db.collection("subscriptions").find().toArray((err, result) => {
      // there was a problem getting the subscriptions.
      if (err) {
        console.log("A problem occurred while getting subscriptions");
        res.sendStatus(500);
        return;
      }

      // Build each subscription.
      const subscriptions = result.map(dbSubscription => objects.subscription(dbSubscription));

      // Return the subscriptions.
      res.json(subscriptions);
    });
  });

  // Creates a subscription.
  app.post("/subscription", (req, res) => {
    // Attempt to extract the subscription information.
    const subscription = objects.subscription(req.body);
    if (!subscription) {
      res.sendStatus(400);
      return;
    }

    // Save the subscription information.
    db.collection("subscriptions").insertOne(subscription, (err, result) => {
      // There was a problem writing the subscription.
      if (err) {
        console.log("A problem occurred while saving a subscription");
        res.sendStatus(500);
        return;
      }

      // Map the object.
      const mapped = objects.subscription(subscription);

      // Send the subscription with the ID included.
      res.send(mapped);
    });
  });

  // Deletes a subscription.
  app.delete("/subscription/:subscriptionid", (req, res) => {
    // Pull the ID.
    const id = req.params.subscriptionid;
    if (!id) {
      res.sendStatus(400);
      return;
    }

    // Delete the record.
    db.collection("subscriptions").deleteOne({ _id: new mongo.ObjectId(id) }, (err, result) => {
      // There was a problem deleting the subscription.
      if (err) {
        console.log("A problem occurred while deleting a subscription");
        res.sendStatus(500);
        return;
      }

      res.send(null);
    });
  });

  // Serve static files found in the "public" directory.
  app.use(express.static("public"));

  // Append cross-origin related headers to every response.
  // app.use((req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  // Every five minutes completely clear the subscriptions collection.
  function clearCollection() {
    setTimeout(() => {
      // Delete the records.
      db.collection("subscriptions").deleteMany({}, err => {
        // There was a problem deleting the subscription.
        if (err) {
          console.log("A problem occurred while clearing the subscriptions");
        }
      });

      clearCollection();
    }, 300000);
  }

  // Initiate auto-cleanup
  clearCollection();

  // Start listening.
  app.listen(PORT, HOST);
  console.log("Listening!");
});
