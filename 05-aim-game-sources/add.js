const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEL = document.querySelector('#time')
const board =document.querySelector('#board')
const colors = ['rgb(240, 240, 76)','rgb(182, 174, 51)','rgb(110, 25, 25)','rgb(247, 210, 21)','rgb(235, 238, 62)','rgb(199, 35, 35)','rgb(231, 12, 12)','rgb(236, 119, 119)' ]

let time = 0;
let score = 0;
startBtn.addEventListener('click',(event) =>{
	event.preventDefault()
	screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
	if (event.target.classList.contains('time-btn')) {
		time = +event.target.getAttribute('data-time');
		screens[1].classList.add('up')
		startGame()
   }
})

board.addEventListener('click' ,event => {
	if (event.target.classList.contains('circle')) {
		score++
		event.target.remove()
		createRandomCircle()
	}
})


function startGame(){
	setInterval(decreseTime ,1000)
	createRandomCircle()
	setTime(time)
}

function decreseTime(){
	if (time === 0) {
		finishGame()
	}else{
		let current = --time
	if (current < 10) {
		current = `0${current}`
	}
	setTime(current)
	}
	
}

function setTime(value) {
timeEL.innerHTML = `00:${value}`
}

function finishGame() {
	timeEL.parentNode.classList.add('hide')
	board.innerHTML = `<h1>Pахунок: <span class='primary'>${score}</span></h1>`
}
function createRandomCircle() {
	const circle = document.createElement('div')
	const size = getRandomNumber(10 , 60)
	const {width , height} = board.getBoundingClientRect()
	const x = getRandomNumber(0 ,width - size)
	const y = getRandomNumber(0 ,height - size)

	circle.classList.add('circle')
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.top = `${x}px`
	circle.style.left = `${y}px`
	board.append(circle)

	const color = getRandomColor()
	circle.style.backgroundColor = color
}

function getRandomNumber(min , max) {
	return Math.round(Math.random() * (max - min) + min) 
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length - 1)
   return colors[index]
}

