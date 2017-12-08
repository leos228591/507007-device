var map = document.querySelector(".contacts-map");
var contacts_us = document.querySelector("#contacts-to-me");
var registration = document.querySelectorAll(".Registration");
var registration_map = document.querySelector(".Registration-map");
var show = document.querySelector(".Registration-show");
var close = document.querySelectorAll(".close");

map.addEventListener("click", function (evt) {
	evt.preventDefault();
	registration_map.classList.add("Registration-on");
});

contacts_us.addEventListener("click", function (evt) {
	evt.preventDefault();
	show.classList.add("Registration-on");
});

for (var i = 0; i < close.length; i++) {
	close[i].addEventListener("click", function(evt) {
		for (var j = 0; j < registration.length; j++) {
			registration[j].classList.remove("Registration-on");
		}
	});
};
