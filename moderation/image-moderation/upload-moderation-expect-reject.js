require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// using specified moderation threshold for violence
cloudinary.uploader
  .upload('./assets/uno-cig.jpg', {
    public_id: 'ai/uno-cig',
    moderation: 'aws_rek',
    notification_url:
      'https://webhook.site/1d0a41ba-d2e7-4840-afab-84241eb78fc8',
  })
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error) => {
    console.log(error);
  });