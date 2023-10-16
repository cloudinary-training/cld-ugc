require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// limit the dimensions of an uploaded image to a width of 2000 pixels and a height of 1000 pixels:
cloudinary.v2.uploader
.upload("sample.jpg",
  { width: 2000, height: 1000, crop: "limit" })
.then(result=>console.log(result));