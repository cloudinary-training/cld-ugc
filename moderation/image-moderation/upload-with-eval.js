require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// DOCS: https://cloudinary.com/documentation/analysis_on_upload#evaluating_and_modifying_upload_parameters

// The eval parameter allows you to modify upload parameters by specifying custom logic with JavaScript code that is evaluated when uploading a file to Cloudinary.
// This can be useful for conditionally adding tags, contextual metadata and structured metadata depending on specific criteria of the uploaded file.

// using eval parameter to assign a tag of "blurry" to any images that have been evaluated under the designated focus score of .5
// alternatively, you could also query on quality_analysis.pixel_score

//The quality_score, quality_analysis.color_score and quality_analysis.pixel_score fields can be used in the search method when
// quality_analysis is set to true in the upload request or an upload preset. 

cloudinary.uploader
.upload("./assets/headshot-blurry.jpg",
  { quality_analysis: true,
    eval: "if (resource_info.quality_analysis.focus < 1) { upload_options['tags'] = 'blurry'}" })
.then(result=>console.log(result));

// Another option is to evaluate the accessibility analysis score upon upload.
// DOCS: https://cloudinary.com/documentation/analysis_on_upload#accessibility_analysis
// Analyzing your images for accessibility can help you to choose the best images for people with color blindness.

