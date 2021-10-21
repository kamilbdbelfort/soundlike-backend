// index.jss
const express = require("express");
const app = express();

// Middlewares

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

// Define routers
const SoundRouter = require("./routers/soundRouter");
const CategoryRouter = require("./routers/categoryRouter");

// Use routers
app.use("/", SoundRouter);
app.use("/categories", CategoryRouter);

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
