const getCloudinaryUrl = (imgName, imgId, imgType, h, w) => {
  let url = "https://res.cloudinary.com/htatemitchell/image/upload/";

  if (h != null) {
    url += "h_" + h + ",";
  }
  if (w != null) {
    url += "w_" + w + ",";
  }
  url += ",c_fill/" + imgId + "/gamestoretour/" + imgName + "." + imgType;

  return url;
};
export default getCloudinaryUrl;
