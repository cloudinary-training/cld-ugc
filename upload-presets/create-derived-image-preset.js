require("dotenv").config();
const cloudinary = require("cloudinary").v2;


// this could be an upload preset for an avatar/profile picture, as an incoming transformation
// examples of UGC use cases that require a profile picture: social apps, marketplace apps, any app where a review or testimonial can be submitted
cloudinary.api.create_upload_preset({
    name: "profile-preset", // name of upload preset
    tags: "employees, faces, profile", // tags to add to all images uploaded with this preset
    folder: "profiles", // specifying the folder where the assets will be stored
    allowed_formats: "jpg, png", // allowing only certain file formats to be submitted

    transformation: [
      {
        width: 200,
        height: 200,
        crop: "thumb",
        gravity: "face", // this will center the face.
        radius: "max" // a common choice would be to apply radius: "max" to give the asset rounded corners, which is possible because we've created a 1:1 aspect ratio
      },
    ],
  })
  .then((uploadResult) => console.log(uploadResult))
  .catch((error) => console.error(error));
