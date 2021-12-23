const fs = require("fs");
const path = require("path");
const createCollage = require("@settlin/collage");
const genztechiesMembers = require("../members/index");

const filteredMembersImage = genztechiesMembers.map(
  (member) => member.image_url
);

// Resolve the directory of this file
const dir = path.resolve(__dirname, "..", "public", "assets");

const numberOfImagesPerRow = Math.floor(filteredMembersImage.length / 3);

const options = {
  sources: [...filteredMembersImage],
  width: numberOfImagesPerRow === 0 ? 1 : numberOfImagesPerRow, // number of images per row
  height: numberOfImagesPerRow === 0 ? 1 : 3, // number of images per column
  imageWidth: 250, // width of each image
  imageHeight: 250, // height of each image
  spacing: 1 // optional: pixels between each image
};

createCollage(options).then((canvas) => {
  const src = canvas.jpegStream();
  const dest = fs.createWriteStream(path.resolve(dir, "community_collage.jpg"));
  src.pipe(dest);
});
