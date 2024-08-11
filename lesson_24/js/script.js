// Строгий режим
"use strict"


// #1
document.querySelectorAll('.element').forEach(element => {
	element.addEventListener('click', () => {
		 element.classList.toggle('active');
	});
});


// #2
window.addEventListener('load', function() {
	document.body.classList.add('loaded');
});


// №3
const header = document.querySelector('header')
const footer = document.querySelector('footer')
header.addEventListener('mouseover', () => {
	footer.style.backgroundColor = '#9acd32'
	footer.style.color = '#000'
})
header.addEventListener('mouseleave', () => {
	footer.style.backgroundColor = '#000'
	footer.style.color = '#fff'
})


// const header = document.querySelector('header')
// const footer = document.querySelector('footer')
// header.addEventListener('mouseover', colorFooter)
// header.addEventListener('mouseleave', colorFooter)
// function colorFooter(e){
// 	if(e.type === 'mouseover'){
// 		footer.style.backgroundColor = '#9acd32'
// 		footer.style.color = '#000'
// 	}
// 	else if(e.type === 'mouseleave'){
// 		footer.style.backgroundColor = '#000'
// 		footer.style.color = '#fff'
// 	}
// }


// document.getElementById('header').addEventListener('mouseenter', function() {
// 	document.getElementById('footer').style.backgroundColor = '#9acd32';
// });

// document.getElementById('header').addEventListener('mouseleave', function() {
// 	document.getElementById('footer').style.backgroundColor = '#000';
// });



// #4
const item = document.querySelector('.item')

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.8,
}

const callback = (entries, observer) => {
	entries.forEach(entry => {
		const currentElement = entry.target
		if (entry.isIntersecting) {
			currentElement.classList.add('animate')
			let time = 0;
			function updateTimer() {
				if (time < 5) {
					time++;
					document.getElementById('timer').textContent = time;
					}
				}
				let timerInterval = setInterval(updateTimer, 1000);
		}
		else {
			currentElement.classList.remove('animate')
		}
	})
}

const observer = new IntersectionObserver(callback, options)
const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach(animElement => {
	observer.observe(animElement)
})