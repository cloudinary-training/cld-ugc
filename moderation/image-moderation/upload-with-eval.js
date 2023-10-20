require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// DOCS: https://cloudinary.com/documentation/analysis_on_upload#evaluating_and_modifying_upload_parameters

// The eval parameter allows you to modify upload parameters by specifying custom logic with JavaScript code that is evaluated when uploading a file to Cloudinary.
// This can be useful for conditionally adding tags, contextual metadata and structured metadata depending on specific criteria of the uploaded file.

// using eval parameter to assign a tag of "blurry" to any images that have been evaluated under the designated focus score of .5
cloudinary.uploader
.upload("./assets/headshot-blurry.jpg",
  { quality_analysis: true,
    eval: "if (resource_info.quality_analysis.focus < 1) { upload_options['tags'] = 'blurry'}" })
.then(result=>console.log(result));