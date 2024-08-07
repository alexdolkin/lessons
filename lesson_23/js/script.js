// Строгий режим
"use strict"


// #1
// const bodyElement = document.body;
// console.log(bodyElement);



// #2
// function addList(item = 5) {
// 	const ul = document.createElement('ul');
// 	for (let i = 0; i < item; ++i) {
// 		 const li = document.createElement('li');
// 		 li.textContent = `Пункт № ${i + 1}`;
// 		 ul.append(li);
// 	}
// 	document.body.append(ul);
// }
// addList();
// addList(1);



// №3
// const body = document.querySelector('body')
// body.classList.toggle('loaded')
// if (body.classList.contains('loaded')){
// 	console.log('Клас loaded');
// 	body.style.color = `green`;
// }



// #4
const item = document.querySelectorAll('.item');
if (item.length) {
	item.forEach((item, index) => {
		item.classList.add('active');
		item.textContent = `Елемент №${index + 1}`
	});
}


// #5
const button = document.querySelector('.button');
function scrollToBlock(button) {
	button.scrollIntoView({
		button: "center",
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(button);


// №6
const link = document.querySelector('.link');
link.setAttribute('data', '100');
const data = parseInt(link.getAttribute('data'));
if (data < 200) {
	link.style.color = 'red';
}
