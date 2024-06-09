// ========бургер меню========
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.burger')) {
		document.documentElement.classList.toggle('menu-open');
	}
})


// const btn = document.querySelector('.burger');
// const nav = document.querySelector('.nav');

// btn.addEventListener('click', ()=>{
// 	nav.classList.toggle('menu-open');
// });