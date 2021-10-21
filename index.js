// index.js

const express = require("express");
const app = express();

// Define routers
const SoundRouter = require("./routers/soundRouter");
const CategoryRouter = require("./routers/soundRouter");

// Use routers
app.use("/", SoundRouter);
app.use("/categories", CategoryRouter);

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
