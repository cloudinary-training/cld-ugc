require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// creating a simple upload preset with tagging, foldering, accepting only certain file formats
// you'll notices that we have have not included additional transformations in this upload preset
// check out "create-derived-image-preset.js" (in this same upload-presets folder of the repo) to see how to create an upload preset WITH transformations included
cloudinary.api.create_upload_preset({
  name: 'cozy-babies',
  tags: 'baby, winter, snow',
  folder: 'babies',
  allowed_formats: 'jpg, png'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));