// Header Menu Navigation
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
const body = document.body;
document.onclick = function (e) {
	if (e.target !== toggle && e.target.id !== sidebar) {
		toggle.classList.remove("active");
		sidebar.classList.remove("active");
		body.classList.remove("lock")
	}

	toggle.onclick = function () {
		toggle.classList.toggle("active");
		sidebar.classList.toggle("active");
		body.classList.toggle("lock")
	};
};


const profitable__swiper = new Swiper('.profitable__swiper', {

	// Navigation arrows
	navigation: {
		nextEl: '.icon-arrow-left',
		prevEl: '.icon-arrow-right',
	},
		// Optional parameters
		loop: true,
		grabCursor: true,
		slidesPerView: 6,

		breakpoints: {
			991: {
			  slidesPerView: 6,
			},
			479: {
			  slidesPerView: 3,
			},
			280: {
			  slidesPerView: 1,
			},
		 }
  });

  const profitable__swiper_two = new Swiper('.profitable__swiper-two', {

	// Navigation arrows
	navigation: {
	  nextEl: '.icon-arrow-left',
	  prevEl: '.icon-arrow-right',
	},
	// Optional parameters
	loop: true,
	grabCursor: true,
  });





const item = document.getElementsByClassName("help-question__item");

for(let i = 0; i < item.length; i++) {
	item[i].addEventListener("click", function() {
		this.classList.toggle("active");
	})
}


