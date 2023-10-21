require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Cloudinary AI Content Analysis - Object Aware Cropping
// Ensures that your image crops keep the specific objects that matter to you,
// even when you significantly modify the aspect ratio.

cloudinary.uploader
  .upload('./assets/model-with-bangs.jpg', {
    overwrite: true,
    invalidate: true,
    auto_tagging: '0.6',  //default 0.5
    detection: "cld-fashion"
  })
.then((result) => {
    console.log(JSON.stringify(result, null, 2));
    const url = cloudinary.url(result.public_id, {
        secure: true,
        gravity: 'bag',
        crop: 'crop',
        sign_url: true
      })
      console.log(url)
    
    
    // log all of the tagged objects (coat, purse, boot)

    console.log(
        cloudinary.url(result.public_id, {
          crop: 'crop',
          gravity: 'coat',
        })
      ) 
      console.log(
        cloudinary.url(result.public_id, {
            crop: 'crop',
          gravity: 'purse',
        })
      )
      console.log(
        cloudinary.url(result.public_id, {
            crop: 'crop',
          gravity: 'boot',
        })
      )
  })
  .catch((error) => {
    console.log(error);
  });