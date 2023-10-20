
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/baby.jpg', {
  public_id: 'winter-baby-12',
  upload_preset: 'cozy-babies'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));