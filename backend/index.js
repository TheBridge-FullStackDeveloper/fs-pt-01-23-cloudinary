const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Toda la configuración de Cloudinary se encuentra 
en el archivo config/cloudinary.js
y la configuración de Multer se encuentra 
en el archivo middleware/multer.js */

const upload = require("./middleware/multer");

app.post("/upload", upload.single("picture"), (req, res) => {
  res.status(200).json({
    url: req.file,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
