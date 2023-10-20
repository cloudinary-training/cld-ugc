require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// specifying folder by including the structure in the public_id parameter
// in the example below, the public ID is "california/restaurant38/dishes/omakase-platter-3"
// this means the image of the sushi platter is in a folder called dishes which is nested within another folder called restaurant 38
// which is nested within another folder called california 

cloudinary.uploader.upload("./assets/sushi.jpg", {public_id: "california/restaurant38/dishes/omakase-platter-3"})
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});

// specifying the folder only, which will be included in the public ID
// once uploaded, the public ID for this asset will be: store77/fall-coats-2023/[unique string of 20 characters] (i.e. store77/fall-coats-2023/l7xrssxeqrvfh7kch5dc)

cloudinary.uploader.upload("./assets/model-with-bangs.jpg", {folder: "store77/fall-coats-2023"})
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});
