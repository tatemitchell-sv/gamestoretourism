const getCloudinaryUrl = (name, cloudID, h, w) => {
  if (name && cloudID) {
    let url = "https://res.cloudinary.com/htatemitchell/image/upload/";

    if (h != null) {
      url += "h_" + h + ",";
    }
    if (w != null) {
      url += "w_" + w + ",";
    }
    url += ",c_fill/" + cloudID + "/gamestoretour/" + name;

    return url;
  }
  return;
};
export default getCloudinaryUrl;
