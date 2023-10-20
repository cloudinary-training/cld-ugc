require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//DOCS: https://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url
console.log(cloudinary.url("https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg", {type: "fetch"}));
