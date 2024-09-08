function CropImage(imageURL: string) {
  const splitOn = "media/";
  const splitImg = imageURL.indexOf(splitOn);
  return (
    imageURL.slice(0, splitImg) +
    splitOn +
    "crop/600/400/" +
    imageURL.slice(splitImg + splitOn.length, imageURL.length)
  );
}

export default CropImage;
