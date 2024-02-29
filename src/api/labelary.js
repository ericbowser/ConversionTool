import { DecodeBase64, EncodeBase64 } from "../utils/EncodeDecode";

async function Post(stringBody) {
  /*
	const encode = EncodeBase64(stringBody);
	const decoded = DecodeBase64(encode);
*/

  const myHeaders = new Headers();
  myHeaders.append("Accept", "image/png");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: stringBody,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.labelary.com/v1/printers/12dpmm/labels/4x6/0/",
    requestOptions,
  );
  console.log(response);
  return response;
}

export default Post;
