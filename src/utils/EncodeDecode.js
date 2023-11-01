
function DecodeBase64(encoded) {
	const decoded = atob(encoded);
	return decoded;
}

function EncodeBase64(toEncode) {
	const encoded = btoa(toEncode);
	return encoded;
}

export { DecodeBase64, EncodeBase64 };
