// Import dependencies.
const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongodb");
const objects = require("./objects");

// Endpoint settings.
const PORT = 80;
const HOST = "0.0.0.0";

// Get the Mongo client instance.
const MongoClient = mongo.MongoClient;

// Connect to the Mongo instance.
MongoClient.connect("localhost:27017/school-of-motion", (err, client) => {
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

  // Route used to serve the application.
  app.get("/", res => {
    res.send("Hello, School of Motion!");
  });

  // Gets the subscription list.
  app.get("/subscription", res => {
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
      res.send(subscriptions);
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
    db.collection("subscriptions").save(subscription, (err, result) => {
      // There was a problem writing the subscription.
      if (err) {
        console.log("A problem occurred while saving a subscription");
        res.sendStatus(500);
        return;
      }

      // Send the subscription with the ID included.
      res.send({
        ...subscription,
        id: result._id
      });
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
    db.collection("subscriptions").findOneAndDelete({ _id: id }, (err, result) => {
      // There was a problem deleting the subscription.
      if (err) {
        console.log("A problem occurred while deleting a subscription");
        res.sendStatus(500);
        return;
      }

      res.sendStatus(200);
    });
  });

  // Start listening.
  app.listen(PORT, HOST);
  console.log("Listening!");
});
