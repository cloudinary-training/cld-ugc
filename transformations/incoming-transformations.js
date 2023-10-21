require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// limit the dimensions of an uploaded image to a width of 1000 pixels and a height of 500 pixels:
cloudinary.uploader
.upload("./assets/janedoe.jpg",
  { width: 500, height: 500, crop: "thumb", radius: "max", format: "png"})
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));



