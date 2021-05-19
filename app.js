function generateColor(){
	let haxcode = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	let color = '#';
	for(let i=0; i<6; i++){
		let num = Math.round(Math.random()*15);
		let numm2 = haxcode[num];
		color += numm2;
	}
	document.getElementById('container').style.background = color;
	document.getElementById('output').style.color = color;
	document.getElementById('output').innerHTML = color;
}