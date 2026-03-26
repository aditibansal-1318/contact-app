const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Replace with MongoDB URI later
mongoose.connect("mongodb+srv://aditi0350be23_db_user:aditibansal@cluster0.5pvgsq1.mongodb.net/?appName=Cluster0")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));