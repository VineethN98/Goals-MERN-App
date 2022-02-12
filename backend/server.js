const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 8000;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
