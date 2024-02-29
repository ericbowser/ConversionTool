function DecodeBase64(encoded) {
  return atob(encoded);
}

function EncodeBase64(toEncode) {
  return btoa(toEncode);
}

export { DecodeBase64, EncodeBase64 };
