const express = require("express");

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/", (req, res) => {
  res.send("Hello,World");
});
