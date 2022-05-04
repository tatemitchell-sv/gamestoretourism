const getCloudinaryUrl = (imgName, imgId, h, w) => {
  if (imgName && imgId) {
    let url = "https://res.cloudinary.com/htatemitchell/image/upload/";

    if (h != null) {
      url += "h_" + h + ",";
    }
    if (w != null) {
      url += "w_" + w + ",";
    }
    url += ",c_fill/" + imgId + "/gamestoretour/" + imgName;

    return url;
  }
  return;
};
export default getCloudinaryUrl;
