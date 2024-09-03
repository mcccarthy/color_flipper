const colors = [
	'green',
	'red',
	'rgba(133,122,200)',
	'#f15025',
	'#FF5733',
	'#33FF57',
	'#3357FF',
	'#F333FF',
	'#33FFF5',
	'blue',
	'yellow',
	'purple',
	'orange',
	'pink',
	'teal',
	'rgba(255,99,71,0.5)',
	'rgba(60,179,113,0.5)',
	'#FF6347',
	'#FFD700',
	'#ADFF2F',
	'#4B0082',
	'#FF4500',
	'#DC143C',
	'#008080',
	'#DA70D6',
	'#7FFF00',
	'#00FFFF',
	'#FF69B4',
	'#CD5C5C',
	'#BA55D3',
	'#5F9EA0',
	'#D2691E',
	'#6495ED',
	'#40E0D0',
	'#4682B4',
	'#EE82EE',
	'#9ACD32',
	'#FF7F50',
	'#2E8B57',
	'#B0E0E6',
	'#FF1493',
	'#00FA9A',
	'#800000',
	'#66CDAA',
	'#8A2BE2',
	'#D2B48C',
	'#BC8F8F',
	'#FFA07A',
	'#20B2AA',
	'#778899',
	'#00FF7F',
	'#B22222',
	'#FFDAB9',
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

let lastColorIndex = -1;

btn.addEventListener('click', function () {
	let randomNumber = getRandomNumber();

	// Ensure the new color is different from the last color
	while (randomNumber === lastColorIndex) {
		randomNumber = getRandomNumber();
	}

	// Apply the new color
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];

	// Update lastColorIndex with the current color's index
	lastColorIndex = randomNumber;
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
