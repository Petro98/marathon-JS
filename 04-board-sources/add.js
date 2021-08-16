const board = document.querySelector('#board')
const colors = ['rgb(240, 240, 76)','rgb(182, 174, 51)','rgb(110, 25, 25)','rgb(247, 210, 21)','rgb(235, 238, 62)','rgb(199, 35, 35)','rgb(231, 12, 12)','rgb(236, 119, 119)' ]

const SQUARES_NUMBER = 3000

for(let i = 0; i < SQUARES_NUMBER; i++){
	const squaer = document.createElement('div')
	squaer.classList.add('square')

	squaer.addEventListener('mousemove',() =>
	setColor(squaer))

	squaer.addEventListener('mouseleave',() =>
	removeColor(squaer))
console.log(squaer,board);
	board.append(squaer)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
}


function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length - 1)
   return colors[index]
}
