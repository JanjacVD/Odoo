export const addHttpToUrl = (url: string) => {
  let uriString = encodeURI(url);
  if (
    !url.startsWith("http://") &&
    !url.startsWith("https://") &&
    !url.startsWith("#")
  ) {
    // If not, add the default "https://" prefix
    uriString = "https://" + url;
  } else if (url[0] === "#") uriString += "http://";
  if (uriString.endsWith("/")) {
    return uriString.slice(0, -1); // Remove the last character if it's a "/"
  }
  return uriString;
};
