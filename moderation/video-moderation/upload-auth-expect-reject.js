require('dotenv').config()
const cloudinary = require('cloudinary').v2

// using add on Google AI Video Moderation
// possible is a lower confidence meaning more will be accepted
cloudinary.uploader
  .upload('./assets/hot-tub.mp4', {
    resource_type: 'video',
    public_id: 'hot-tub',
    type: 'authenticated',
    moderation: "google_video_moderation:possible",
    notification_url:
      'https://webhook.site/1d0a41ba-d2e7-4840-afab-84241eb78fc8'
  })
  .then(result => {
    console.log(result)
    console.log(result.moderation.response)
  })
  .catch(error => console.log(error))

// Cloudinary's Admin API can be used to list all moderated videos.
// You can list either the approved or the rejected videos by specifying the second parameter of the
// resources_by_moderation API method.
// For example, to list all videos rejected by the Google AI Video Moderation add-on:

cloudinary.api
.resources_by_moderation("google_video_moderation", "rejected", { resource_type: "video" })
.then(result=>console.log(result));