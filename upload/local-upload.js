require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// this is an example of how to perform a simple local upload to cloudinary
cloudinary.uploader.upload('./assets/baby.jpg', {
  public_id: 'winter-baby-8',
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));