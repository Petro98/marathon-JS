const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const container = document.querySelector('.container')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidersConst = mainSlide.querySelectorAll('div').length


let activeSliderIndex = 0

sidebar.style.top = `-${(slidersConst - 1) * 100}vh`

upBtn.addEventListener('click',()=>{
	changeSlide('up')
})

downBtn.addEventListener('click',()=>{
	changeSlide('down')
})

function changeSlide(directin) {
	if (directin === 'up') {
		activeSliderIndex++
		if (activeSliderIndex == slidersConst) {
			activeSliderIndex = 0
		}
	}else if (directin === 'down'){
		activeSliderIndex--
		if (activeSliderIndex < 0) {
			activeSliderIndex = slidersConst -1
		}
	}

	const height = container.clientHeight

	mainSlide.style.transform = `translateY(-${activeSliderIndex * height}px)`

	sidebar.style.transform = `translateY(${activeSliderIndex * height}px)`
}