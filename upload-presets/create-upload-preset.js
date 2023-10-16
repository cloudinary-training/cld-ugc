require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.create_upload_preset({
  name: 'demo_preset',
  tags: 'baby, winter, snow',
  folder: 'babies',
  allowed_formats: 'jpg, png'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));