

const Post = (options = {}) => {
	const myHeaders = new Headers();
	myHeaders.append("Accept", "image/png");
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
	
	const raw = `^XA^MCY^XZ^XA^SZ2^PON^PMN^CI0^LRN
		^FWN
		^FO0,0^GB812,1218,3^FS
	^FO0,0^GB206,206,3^FS
	^FO440,55^GB335,100,3^FS
	^CF0,25
	^FO450,65^FDU.S. POSTAGE PAID^FS
	^FO450,95^FDNot Valid Test Label^FS
	^FO450,125^FDeVS^FS
	^FO0,203^GB812,1,3^FS
	^FO0,270^GB812,1,3^FS
	^CF0,200,180^FWN^FO50,30^FDP^FS
	^CF0,65, 55
	^FB808,1,0,C
	^CI27
	^FO0,220^FH^FDPRIORITY MAIL_AE^FS
	^CF0,25
	^FO30,300^FDMAERSK^FS
	^FO30,330^FDMAERSK^FS
	^FO30,360^FD7001 S CENTRAL AVE^FS
	^FO30,390^FDLOS ANGELES CA 90052^FS
	^FO30,420^FD^FS
	^CF0,25
	^FO775,300,1^FD^FS
	^CF0,35
	^FO775,325,1^FD0001^FS
	^CF0,40,40
	^FO600,507^GB110,50,3^FS
	^FO615,517^FDC012^FS
	^CF0,25
	^CF0,40,35
	^FO134,560^FD^FS
	^FO134,600^FDBRYAN TEST^FS
	^FO134,640^FDBRYAN COMPANY^FS
	^FO134,680^FD336 S 4TH ST^FS
	^FO134,720^FDMIAMISBURG OH 45342-2946^FS
	^CFA,15
	^FO0,754^GB812,1,15^FS
	^FO0,1069^GB812,1,15^FS
	^CF0,37,40
	^FB808,1,0,C
	^FO0,777^FH^FDUSPS TRACKING #  eVS^FS
	^CF0,37,40
	^FB808,1,0,C
	^FO0,1033^FD9205 5902 4232 7008 5989 61^FS
	^BY3,2,170
	^FO55,832^BCN,170,N^FD>;>842045342>89205590242327008598961^FS
	^FO27,600^BXN,4,200,20,20,6,_
	^FD_142045342_19205590242327008598961^FS
	^FO703,1110^BXN,4,200,20,20,6,_
	^FD_142045342_19205590242327008598961^FS
	^ABN,70,25
	^FO50,420^FDSAMPLE - DO NOT MAIL^FS
	^MCY^XZ
	"`;
	
	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	return fetch("https://api.labelary.com/v1/printers/12dpmm/labels/4x6/0/", requestOptions)
		.then(response => response.text())
		.then(result => result)
		.catch(error => console.log('error', error));
	// const response = await fetch(url, options);
	// return await response.json();
}


export default Post;