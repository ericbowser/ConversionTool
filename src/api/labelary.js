import {DecodeBase64, EncodeBase64} from '../utils/EncodeDecode';

const Post = (stringBody) => {
	
	const encode = EncodeBase64(stringBody);
	const decoded = DecodeBase64(encode);
	
	const myHeaders = new Headers();
	myHeaders.append("Accept", "image/png");
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
	
	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: decoded,
		redirect: 'follow'
	};

	return fetch("https://api.labelary.com/v1/printers/12dpmm/labels/4x6/0/", requestOptions)
		.then(response => response.text())
		.then(result => result)
		.catch(error => console.log('error', error));
}

export default Post;