const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const route = require("./routes/route");
app.use("/routes", route);
app.listen(5000);
