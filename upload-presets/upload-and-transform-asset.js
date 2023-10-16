require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/smiling.jpg', {
  public_id: 'smiling',
  upload_preset: 'profile-preset'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));