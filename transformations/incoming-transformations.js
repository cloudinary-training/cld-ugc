require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// limit the dimensions of an uploaded image to a width of 1000 pixels and a height of 500 pixels:
cloudinary.v2.uploader
.upload("sample.jpg",
  { width: 1000, height: 500, crop: "limit" })
.then(result=>console.log(result));



