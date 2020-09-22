function menuToggle() {
	const toggleMenu = document.querySelector('.toggleMenu');
	const navigation = document.querySelector('.navigation');
	toggleMenu.classList.toggle('active');
	navigation.classList.toggle('active');
}

// Menu select
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('ul li a');

function indicator(e) {
	marker.style.left = e.offsetLeft+"px";
	marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target);
		console.log('xD');
	})
})

// Menu scroll
window.addEventListener('scroll', function () {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})