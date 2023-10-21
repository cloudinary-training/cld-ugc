require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// limit the dimensions of an uploaded image to a width of 1000 pixels and a height of 500 pixels:
cloudinary.uploader
.upload("./assets/cheeseburger.jpg", {
      crop: "fill",
      gravity: "auto",
      width: 500,
      height: 500,
      quality: "auto" })
      .then(uploadResult => console.log(uploadResult))
      .catch(error => console.error(error));


