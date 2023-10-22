# User-Generated Content (UGC) with Cloudinary 

# Environment Setup

### Install Node.js and NPM
 - You will need to install Node.js on your machine, version 10 or higher.
 - Installing Node.js will also install npm, the package manager for Node.js.


#### Mac Users:
🍺 Using Homebrew:

```console
$ brew install node
```

#### Windows Users:
[Node Download for Windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install:

```console
$ node --version
v18.18.1

$ npm --version
9.8.1
```

### Choose an IDE or Use Text Editor:

- [Visual Studio Code](https://code.visualstudio.com/download) (Recommended)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Sublime](https://www.sublimetext.com/)
- [Atom](https://atom.io/)
- [iTerm](https://iterm2.com/)

### Download this Repository:

[UGC GitHub Repository](https://github.com/cloudinary-training/cld-ugc)

- Node scripts for this module are located in the  `/moderation`, `/foldering`, `/transformations`, `/upload` `/upload-presets`, `/upload-widget`  and `/transformations` directories
- Assets are located in `/assets` directory
- Run code from root directory 

### Account Setup and Credentials:

1. If you don't have one already, create a free Cloudinary account at: https://www.cloudinary.com/signup.

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard (see yellow arrow).

![Dashboard](./assets/environment_variable.png)

3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

There should be one line of code in your .env file, which should look like this:

```console
CLOUDINARY_URL=cloudinary://YOUR_API_KEY:YOUR_API_SECRET@YOUR_CLOUD_NAME
```
- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME

Doing this step properly is essential, as it will let Cloudinary know who you are and provide access to your cloud.
### Run Code: Install Node Libraries


```console
npm i
```
(You will be using the `cloudinary` and the `dotenv` libraries.)

### Run Code: Test Credentials

```console
node testCredentials.js
```

The output should look like this:
```console
your Cloud Name
your API Key
```

- Your API_SECRET is part of your CLOUDINARY_URL
- Remember to always keep your API_SECRET a secret!
  - This is why we programmed testCredentials.js to only output your cloud name and API Key (no need to keep these two credentials private)


### Run Code: Optional Upload Check

```console
node upload/local-upload.js
```
(You can optionally run the local image upload script to make sure you see the asset appear in your cloud)

### Introduction to Material:

There is an accompanying [slide deck](https://docs.google.com/presentation/d/1nEprgb7jLQ-g7r9vU9DvAWpjhXBLckw_3n3KWrf78L8/edit#slide=id.g290ff1d21f2_1_2898) that will walk you through the following topics related to UGC.

- First we review where one might see UGC in the wild
- Then, in the context of a food delivery app, we discuss ways Cloudinary can help with the management of said UGC

### User-Generated Content
- Marketplace
- Social/Dating
- Travel
- E-Commerce
### Handling User Generated Content
- Incoming Transformations
- Upload Presets
- Upload Widget
- File Size
- Storage and Folders
- Analysis on Upload
  - Moderation
  - AI Content Analysis - Tagging, Cropping
  - Quality Analysis
### Further Education and Assistance
- Media Flows
- Cloudinary Academy and Community

### Directory of File Locations:

- Incoming Transformations:
  - ```transformations/incoming-transformations.js```
- Upload Presets: 
  - ```upload-presets/create-upload-preset.js```
  - ```upload-presets/create-derived-image-preset.js```
  - ```upload-presets/upload-using-preset.js```
  - ```upload-presets/upload-and-transform-asset.js```
- Upload Widget:
  - ```upload-widget/index.html```
- File Size:
  - ```transformations/resize.js```
- Storage and Folders:
  - ```foldering/specify-location.js```
- Analysis on Upload
  - Image Moderation
    - ```moderation/image-moderation/upload-moderation-expect-approval.js```
    - ```moderation/image-moderation/upload-moderation-expect-reject.js```
  - Video Moderation
    - ```moderation/video-moderation/upload-auth-expect-approval.js```
    - ```moderation/video-moderation/upload-auth-expect-reject.js```
  - AI Content Analysis - Tagging, cropping, quality score, eval parameter
    - ```content-analysis/gravity-detection-cropping.js```
    - ```content-analysis/upload-with-tags.js```
    - ```content-analysis/upload-with-quality-analysis.js```


### Related Helpful Cloudinary Documentation and Tutorials:
- [upload presets docs:](https://cloudinary.com/documentation/upload_presets)
- [AI Content Analysis Docs:](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon)
- [Supported content-aware detection models:](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
- [Object detection demo app:](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#object_detection_demo)
- [Resizing and cropping interactive demo:](https://cloudinary.com/documentation/resizing_and_cropping#resizing_and_cropping_interactive_demo)
- [Upload Presets Video Tutorial:](https://cloudinary.com/documentation/create_upload_preset_tutorial) - walks you through the steps of creating signed upload presets using the Admin API.
- [Upload Programmatically Video Tutorial:](https://cloudinary.com/documentation/upload_programmatically_tutorial) - covers Node.js setup and upload to your Cloudinary cloud.
- [Evaluating and Moderating Upload Parameters - eval:](https://cloudinary.com/documentation/analysis_on_upload#evaluating_and_modifying_upload_parameters)
- [Add-Ons](https://console.cloudinary.com/settings/addons)


### Image and Video Asset Credits 

- person-with-glasses.jpg: [Photo by Daniel Xavier](https://www.pexels.com/photo/woman-wearing-black-eyeglasses-1239291/)

- janedoe.jpg: [Photo by Andrea Piacquadio from Pexels](https://www.pexels.com/photo/woman-in-collared-shirt-774909/)

- baby.jpg: [Photo by Ganimat Pashazade from Pexels](https://www.pexels.com/photo/baby-in-white-and-blue-jacket-lying-on-snow-covered-ground-8882288/)

- uno-cig.jpg: [Photo by Pavel Danilyuk from Pexels](https://www.pexels.com/photo/burned-cigarette-butts-in-a-saucer-8551147/)

- cheeseburger.jpg: [Photo by Valeria Boltneva from Pexels](https://www.pexels.com/photo/close-up-photo-of-burger-1639562/)

- koala.jpg: [Video by Valeriia Miller from Pexels](https://www.pexels.com/video/koala-eating-leaves-from-a-branch-6040389/)

- hot-tub.mp4: [Video by Ron Lach from Pexels](https://www.pexels.com/video/a-handsome-man-inside-a-jacuzzi-8844947/)