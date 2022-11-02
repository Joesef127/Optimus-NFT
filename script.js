// fetching from html
let themeBtn = document.getElementById("change-theme");
// items
const firstItem = document.querySelector("#first-item");
const secondItem = document.querySelector("#second-item");
const thirdItem = document.querySelector("#third-item");
const fourthItem = document.querySelector("#fourth-item");
const fifthItem = document.querySelector("#fifth-item");
const sixthItem = document.querySelector("#sixth-item");
const seventhItem = document.querySelector("#seventh-item");
const eighthItem = document.querySelector("#eighth-item");

// item buttons
const firstBtn = document.getElementById("first-btn");
const secondBtn = document.getElementById("second-btn");
const thirdBtn = document.getElementById("third-btn");
const fourthBtn = document.getElementById("fourth-btn");
const fifthBtn = document.getElementById("fifth-btn");
const sixthBtn = document.getElementById("sixth-btn");
const seventhBtn = document.getElementById("seventh-btn");
const eighthBtn = document.getElementById("eighth-btn");

// item images
const firstImage = document.getElementById("first-image");
const secondImage = document.getElementById("second-image");
const thirdImage = document.getElementById("third-image");
const fourthImage = document.getElementById("fourth-image");
const fifthImage = document.getElementById("fifth-image");
const sixthImage = document.getElementById("sixth-image");
const seventhImage = document.getElementById("seventh-image");
const eighthImage = document.getElementById("eighth-image");

// market categories
const music = document.getElementById("music");
const sport = document.getElementById("sport");
const art = document.getElementById("art");
const photography = document.getElementById("photography");
const more = document.getElementById("more");

// market list
const musicModal = document.getElementById("music-list");
const sportModal = document.getElementById("sport-list");
const artModal = document.getElementById("art-list");
const photographyModal = document.getElementById("photography-list");
const moreModal = document.getElementById("more-list");

// hamburger menu
("use strict");

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
	this.classList.toggle("active");
	header.classList.toggle("active");
});

function setTheme(themeName) {
	localStorage.setItem("theme", themeName);
	document.documentElement.className = themeName;
}

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[dataScrollUp]");

window.addEventListener("scroll", function () {
	window.scrollY >= 500
		? goTopBtn.classList.add("active")
		: goTopBtn.classList.remove("active");
});

function toggleTheme() {
	if (localStorage.getItem("theme") === "light-mode") {
		setTheme("dark-mode");
		themeBtn.innerHTML = "light <br/> mode";
	} else {
		setTheme("light-mode");
		themeBtn.innerHTML = "dark <br/> mode";
	}
}

// market category modal
music.addEventListener("click", function () {
	musicModal.style.display = "flex";
	// block other modal displays
	sportModal.style.display = "none";
	artModal.style.display = "none";
	photographyModal.style.display = "none";
	moreModal.style.display = "none";
});

sport.addEventListener("click", function () {
	sportModal.style.display = "flex";
	// block other modal displays
	musicModal.style.display = "none";
	artModal.style.display = "none";
	photographyModal.style.display = "none";
	moreModal.style.display = "none";
});

art.addEventListener("click", function () {
	artModal.style.display = "flex";
	// block other modal displays
	sportModal.style.display = "none";
	musicModal.style.display = "none";
	photographyModal.style.display = "none";
	moreModal.style.display = "none";
});

photography.addEventListener("click", function () {
	photographyModal.style.display = "flex";
	// block other modal displays
	sportModal.style.display = "none";
	artModal.style.display = "none";
	musicModal.style.display = "none";
	moreModal.style.display = "none";
});

more.addEventListener("click", function () {
	moreModal.style.display = "flex";
	// block other modal displays
	sportModal.style.display = "none";
	artModal.style.display = "none";
	photographyModal.style.display = "none";
	musicModal.style.display = "none";
});

// item button pop-up
firstItem.addEventListener("click", function () {
	firstBtn.style.display = "block";
	firstImage.style.height = "200px";
	// close other pop-ups
	secondBtn.style.display = "none";
	secondImage.style.height = "246px";
	thirdBtn.style.display = "none";
	thirdImage.style.height = "246px";
	fourthBtn.style.display = "none";
	fourthImage.style.height = "246px";
	fifthBtn.style.display = "none";
	fifthImage.style.height = "246px";
	sixthBtn.style.display = "none";
	sixthImage.style.height = "246px";
	seventhBtn.style.display = "none";
	seventhImage.style.height = "246px";
	eighthBtn.style.display = "none";
	eighthImage.style.height = "246px";
});

secondItem.addEventListener("click", function () {
	secondBtn.style.display = "block";
	secondImage.style.height = "200px";
	// close other item pop-ups
	firstBtn.style.display = "none";
	firstImage.style.height = "246px";
	thirdBtn.style.display = "none";
	thirdImage.style.height = "246px";
	fourthBtn.style.display = "none";
	fourthImage.style.height = "246px";
	fifthBtn.style.display = "none";
	fifthImage.style.height = "246px";
	sixthBtn.style.display = "none";
	sixthImage.style.height = "246px";
	seventhBtn.style.display = "none";
	seventhImage.style.height = "246px";
	eighthBtn.style.display = "none";
	eighthImage.style.height = "246px";
});

thirdItem.addEventListener("click", function () {
	thirdBtn.style.display = "block";
	thirdImage.style.height = "200px";
	// close other item pop-ups
	firstBtn.style.display = "none";
	firstImage.style.height = "246px";
	secondBtn.style.display = "none";
	secondImage.style.height = "246px";
	fourthBtn.style.display = "none";
	fourthImage.style.height = "246px";
	fifthBtn.style.display = "none";
	fifthImage.style.height = "246px";
	sixthBtn.style.display = "none";
	sixthImage.style.height = "246px";
	seventhBtn.style.display = "none";
	seventhImage.style.height = "246px";
	eighthBtn.style.display = "none";
	eighthImage.style.height = "246px";
});

fourthItem.addEventListener("click", function () {
	fourthBtn.style.display = "block";
	fourthImage.style.height = "200px";
	// close other item pop-ups
	firstBtn.style.display = "none";
	firstImage.style.height = "246px";
	thirdBtn.style.display = "none";
	thirdImage.style.height = "246px";
	secondBtn.style.display = "none";
	secondImage.style.height = "246px";
	fifthBtn.style.display = "none";
	fifthImage.style.height = "246px";
	sixthBtn.style.display = "none";
	sixthImage.style.height = "246px";
	seventhBtn.style.display = "none";
	seventhImage.style.height = "246px";
	eighthBtn.style.display = "none";
	eighthImage.style.height = "246px";
});

fifthItem.addEventListener("click", function () {
	fifthBtn.style.display = "block";
	fifthImage.style.height = "200px";
	// close other item pop-ups
	firstBtn.style.display = "none";
	firstImage.style.height = "246px";
	thirdBtn.style.display = "none";
	thirdImage.style.height = "246px";
	fourthBtn.style.display = "none";
	fourthImage.style.height = "246px";
	secondBtn.style.display = "none";
	secondImage.style.height = "246px";
	sixthBtn.style.display = "none";
	sixthImage.style.height = "246px";
	seventhBtn.style.display = "none";
	seventhImage.style.height = "246px";
	eighthBtn.style.display = "none";
	eighthImage.style.height = "246px";
});

sixthItem.addEventListener("click", function () {
	sixthBtn.style.display = "block";
	sixthImage.style.height = "200px";
	// close other item pop-ups
	firstBtn.style.display = "none";
	firstImage.style.height = "246px";
	thirdBtn.style.display = "none";
	thirdImage.style.height = "246px";
	fourthBtn.style.display = "none";
	fourthImage.style.height = "246px";
	fifthBtn.style.display = "none";
	fifthImage.style.height = "246px";
	secondBtn.style.display = "none";
	secondImage.style.height = "246px";
	seventhBtn.style.display = "none";
	seventhImage.style.height = "246px";
	eighthBtn.style.display = "none";
	eighthImage.style.height = "246px";
});

seventhItem.addEventListener("click", function () {
	seventhBtn.style.display = "block";
	seventhImage.style.height = "200px";
	// close other item pop-ups
	firstBtn.style.display = "none";
	firstImage.style.height = "246px";
	thirdBtn.style.display = "none";
	thirdImage.style.height = "246px";
	fourthBtn.style.display = "none";
	fourthImage.style.height = "246px";
	fifthBtn.style.display = "none";
	fifthImage.style.height = "246px";
	sixthBtn.style.display = "none";
	sixthImage.style.height = "246px";
	secondBtn.style.display = "none";
	secondImage.style.height = "246px";
	eighthBtn.style.display = "none";
	eighthImage.style.height = "246px";
});

eighthItem.addEventListener("click", function () {
	eighthBtn.style.display = "block";
	eighthImage.style.height = "200px";
	// close other item pop-ups
	firstBtn.style.display = "none";
	firstImage.style.height = "246px";
	thirdBtn.style.display = "none";
	thirdImage.style.height = "246px";
	fourthBtn.style.display = "none";
	fourthImage.style.height = "246px";
	fifthBtn.style.display = "none";
	fifthImage.style.height = "246px";
	sixthBtn.style.display = "none";
	sixthImage.style.height = "246px";
	seventhBtn.style.display = "none";
	seventhImage.style.height = "246px";
	secondBtn.style.display = "none";
	secondImage.style.height = "246px";
});
