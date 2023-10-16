require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.api.create_upload_preset({
    name: "profile-preset",
    tags: "employees, faces, profile",
    folder: "profiles",
    allowed_formats: "jpg, png",

    transformation: [
      {
        width: 200,
        height: 200,
        crop: "thumb",
        gravity: "face",
      },
    ],
  })
  .then((uploadResult) => console.log(uploadResult))
  .catch((error) => console.error(error));
