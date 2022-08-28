const navClose = document.querySelector("#nav-close");
const navBtn = document.querySelector("#nav-btn");
const navBar = document.querySelector("#navbar");
const bigNav = document.querySelector(".nav");

const backToTop = document.querySelector(".back-to-top");

navClose.addEventListener("click", function () {
	navBar.classList.remove("showNav");
});

navBtn.addEventListener("click", function () {
	navBar.classList.add("showNav");
});

document.addEventListener("scroll", function () {
	if (window.scrollY >= 200) {
		backToTop.style.opacity = 1;
	} else {
		backToTop.style.opacity = 0;
	}
	if (window.scrollY >= 20) {
		bigNav.classList.add("nav-scroll");
	} else {
		bigNav.classList.remove("nav-scroll");
	}
});
