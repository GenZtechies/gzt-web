const fs = require("fs");
const path = require("path");
const createCollage = require("@settlin/collage");
const genztechiesMembers = require("../members/index");

// Progress update
console.log("Generating image collage...");

const filteredMembersImage = genztechiesMembers.map(
  (member) => member.image_url
);

// Resolve the directory of this file
const dir = path.resolve(__dirname, "..", "public", "assets");

let divisor = 2;
const numberOfMembers = filteredMembersImage.length;

if (numberOfMembers > 10) divisor = 3;
if (numberOfMembers > 20) divisor = 4;
if (numberOfMembers > 40) divisor = 5;
if (numberOfMembers > 60) divisor = 6;

const numberOfImagesPerRow = Math.floor(numberOfMembers / divisor);

const options = {
  sources: [...filteredMembersImage],
  width: numberOfImagesPerRow === 0 ? 1 : numberOfImagesPerRow, // number of images per row
  height: numberOfImagesPerRow === 0 ? 1 : divisor, // number of images per column
  imageWidth: 250, // width of each image
  imageHeight: 250, // height of each image
  spacing: 1 // optional: pixels between each image
};

createCollage(options).then((canvas) => {
  const src = canvas.jpegStream();
  const dest = fs.createWriteStream(path.resolve(dir, "community_collage.jpg"));
  src.pipe(dest);

  console.log("Community image collage updated 😎🤘🏾");
});
