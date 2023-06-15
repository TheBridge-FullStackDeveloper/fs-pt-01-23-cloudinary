const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "images",
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
