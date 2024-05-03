const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/data", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB database");
});


const leaderboardSchema = new mongoose.Schema({
  Team: String,
  Picture: String,
  Games: Number,
  Score: Number,
}, { collection: 'info' }); 


const Team = mongoose.model("info", leaderboardSchema);

app.get("/getinfo", async (req, res) => {
  try {
    const data = await Team.find().sort({ Score: -1 });
    res.json(data);
    console.log("Done")
  } catch (err) {
    console.error(err); // Print any errors to the console for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
