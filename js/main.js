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





const comeIn = document.querySelector(".right-menu__login");
const container = document.querySelector(".popup-account__container");
const popupBody = document.querySelector(".popup-account__body");
const pwShowHide = document.querySelectorAll(".show-hide-pw");
const pwFields = document.querySelectorAll(".password");
const recovery = document.querySelector(".popup-account__recovery-link");
const login = document.querySelector(".popup-account__login");


comeIn.addEventListener("click", function() {
	container.style.display = 'flex';
	document.body.style.overflow = "hidden";
});

document.addEventListener("click", (e) => {
	if(e.target === container) {
	document.body.style.overflow = "auto";
	container.style.display = "none"
	}
})



pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListener("click", () => {
		pwFields.forEach(pwField => {
			if(pwField.type === "password") {
				pwField.type = "text";

				pwShowHide.forEach(icon => {
					icon.classList.replace("fa-eye-slash", "fa-eye")
				})
			} else {
				pwField.type = "password"

				pwShowHide.forEach(icon => {
					icon.classList.replace("fa-eye", "fa-eye-slash")
				})
			}
		})
	})
});

recovery.addEventListener("click", () => {
	container.classList.add("active");
})

login.addEventListener("click", () => {
	container.classList.remove("active");
})
























