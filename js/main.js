// Header Menu Navigation
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
const body = document.body;
document.onclick = function (e) {
	if (e.target !== toggle && e.target !== sidebar) {
		toggle.classList.remove("active");
		sidebar.classList.remove("active");
		body.classList.remove("lock")
	}
};

toggle.onclick = function () {
	toggle.classList.toggle("active");
	sidebar.classList.toggle("active");
	body.classList.toggle("lock")
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

for (let i = 0; i < item.length; i++) {
	item[i].addEventListener("click", function () {
		this.classList.toggle("active");
	})
}




const popupBg = document.querySelector(".popup-account__bg");


const openPopup = document.querySelector(".right-menu__login");
const closeBtn = document.querySelector(".popup-account__close");

openPopup.addEventListener("click", function () {
	popup.classList.add("show");
	document.body.classList.add("active");
	popupBg.classList.add("active");
})

closeBtn.addEventListener("click", function () {
	popup.classList.remove("show");
	document.body.classList.remove("active");
	popupBg.classList.remove("active");
})






const signin = document.querySelector(".popup-account__signin-link");
const signin2 = document.querySelector(".popup-account__signin-lnk");
const popup = document.querySelector(".popup-account__container");
const recovery = document.querySelector(".popup-account__recovery-link");
const login = document.querySelector(".popup-account__login-link");


recovery.addEventListener("click", function () {
	document.querySelector(".popup-account__recov").style.display = "block";
	document.querySelector(".popup-account__signin").style.display = "none";
	document.querySelector(".popup-account__login").style.display = "none";
})

login.addEventListener("click", function () {
	document.querySelector(".popup-account__recov").style.display = "none";
	document.querySelector(".popup-account__signin").style.display = "none";
	document.querySelector(".popup-account__login").style.display = "block";
})

signin.addEventListener("click", function () {
	document.querySelector(".popup-account__recov").style.display = "none";
	document.querySelector(".popup-account__signin").style.display = "block";
	document.querySelector(".popup-account__login").style.display = "none";
})

signin2.addEventListener("click", function () {
	document.querySelector(".popup-account__recov").style.display = "none";
	document.querySelector(".popup-account__signin").style.display = "block";
	document.querySelector(".popup-account__login").style.display = "none";
})



const pwShowHide = document.querySelectorAll(".show-hide-pw");
const pwFields = document.querySelectorAll(".password");



pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListener("click", () => {
		pwFields.forEach(pwField => {
			if (pwField.type === "password") {
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










function openCnt(evt, info) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("profile-tabs__item");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	tablinks = document.getElementsByClassName("profile-tabs__btn");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(info).style.display = "block";
	evt.currentTarget.className += " active"

}




let btnEdit = document.querySelector(".btn-editing");
let personalArea = document.querySelector(".personal-area");
let persArea = document.querySelector(".personal-area.pers-area");

btnEdit.addEventListener("click", function() {
	btnEdit.classList.add('active');
})

