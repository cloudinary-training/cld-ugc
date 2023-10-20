require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/janedoe.jpg', {
  public_id: 'employee-22',
  upload_preset: 'profile-preset'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));




