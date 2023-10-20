# cld-ugc
Using Cloudinary’s Incoming Transformations for Perfectly Crafted User-Generated Content

## Environment Setup

### Install Node.js and NPM
You will need to install Node.js on your machine, version 10 or higher.
 Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install

```bash
# verify versions
$ node --version
v18.18.1

$ npm --version
9.8.1
```

### Choose an IDE or Use Text Editor

[Visual Studio Code](https://code.visualstudio.com/download) 
 - We recommend VS Code!
[WebStorm](https://www.jetbrains.com/webstorm/)
[Sublime](https://www.sublimetext.com/)
[Atom](https://atom.io/)
[iTerm](https://iterm2.com/)

### Download Repository

[UGC GitHub Repository](https://github.com/cloudinary-training/cld-ugc)

- Node scripts for this module are located in the  `/moderation`, `xyz`, and `abc` directories
- Assets are located in `/assets` directory
- Run code from root directory 

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](./assets/environment_variable.png)

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

### Run Code: Test Credentials

Npm install Node.js libraries. You will be using the `cloudinary` and the `dotenv` libraries.

```bash
npm i
```

```bash
node testCredentials.js
```
You should see your cloud name and API key reported.  Keep your API_SECRET a secret!

### Run Code: Run code in optimization directory
Example: run image upload script in optimization directory

```bash
node xxx-placeholder/images/upload.js
```


### Helpful Video Tutorials
You can find a [video tutorial:](https://cloudinary.com/documentation/upload_programmatically_tutorial) in the Cloudinary Documentation that covers Node.js setup and upload to your Cloudinary cloud.

You can find a [video tutorial:](https://cloudinary.com/documentation/create_upload_preset_tutorial) in the Cloudinary Documentation that walks you through the steps of creating signed upload presets using the Admin API.

### Upload Presets Docs
Additional information about upload presets from the docs [upload presets docs:](https://cloudinary.com/documentation/upload_presets)


## Credits 

## assets

person-with-glasses.jpg: [Photo by Daniel Xavier:](https://www.pexels.com/photo/woman-wearing-black-eyeglasses-1239291/)

janedoe.jpg: [Photo by Andrea Piacquadio from Pexels](https://www.pexels.com/photo/woman-in-collared-shirt-774909/)

baby.jpg: [Photo by Ganimat Pashazade from Pexels](https://www.pexels.com/photo/baby-in-white-and-blue-jacket-lying-on-snow-covered-ground-8882288/)

uno-cig.jpg: [Photo by Pavel Danilyuk from Pexels](https://www.pexels.com/photo/burned-cigarette-butts-in-a-saucer-8551147/)

koala.jpg: [Video by Valeriia Miller from Pexels](https://www.pexels.com/video/koala-eating-leaves-from-a-branch-6040389/)

hot-tub.mp4: [Video by Ron Lach from Pexels](https://www.pexels.com/video/a-handsome-man-inside-a-jacuzzi-8844947/)