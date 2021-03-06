const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

// Create a connection to our Postgres database.
const client = new Pool({
  // These details should **never** be specified in source like this. We use this only for our demo.
  user: "blueprint",
  password: "beautifulengineering",
  host: "localhost",
  database: "demo",
  port: 5432,
  ssl: false,
});

// Start an app that accepts HTTP requests.
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/paws", async (req, res) => {
  try {
    // Your code here!

    res.json([
      /* Respond with a list of Paws */
    ]);
  } catch (err) {
    console.log(err);
    res.json({ success: false, error: err });
  }
});

app.post("/paws", async (req, res) => {
  try {
    // See the incoming request payload
    console.log(req.body);

    // Your code here!
    // Insert a value into Paws from the payload of req.body.

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
});

client.connect().then(() => {
  app.listen(3000);
});
