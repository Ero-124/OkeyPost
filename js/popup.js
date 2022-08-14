
/* Попапы для входа аккаунт, регистрации, забыли пароль */
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
	payPopup.classList.remove("show");
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



function showPay() {
	const payPopup = document.querySelector(".popup-account__container-pay");
	const popupBg = document.querySelector(".popup-account__bg");
	payPopup.classList.add("show");
	popupBg.classList.add("active");
	document.body.style.overflow = "hidden";
}

function closePopup() {
	const payPopup = document.querySelector(".popup-account__container-pay");
	const popupBg = document.querySelector(".popup-account__bg");
	payPopup.classList.remove("show");
	popupBg.classList.remove("active");
	document.body.style.overflow = "";
}

