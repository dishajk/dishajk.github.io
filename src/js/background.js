$(function (){
	const images = ['rhombitrihexagonal', 'sevenOverlappingCircles', 'tilings'];
	const randomIndex = Math.floor(Math.random() * images.length);
	console.log(randomIndex);
	const randomTileurl = "url(media/bg/" + images[randomIndex] + ".svg)";
	console.log(randomTileurl);
	document.body.style.backgroundImage = randomTileurl;
	document.body.style.backgroundRepeat = "repeat";
});