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




/* Показывать блока Редактирование профиль */

function showInnerStr() {
	const persInnerStr = document.querySelector(".personal-area__inner-str");
	const persInner = document.querySelector(".personal-area__inner");
	const profileTabs = document.querySelector(".profile-tabs");

	if (persInnerStr.style.display = "none") {
		persInnerStr.style.display = 'flex';
		persInner.style.display = "none"
		profileTabs.style.display = "none"
	}
}

/* Показывать блока сменить пароль */
function showInnerPass() {
	const persInnerStr = document.querySelector(".personal-area__inner-str");
	const persInner = document.querySelector(".personal-area__inner");
	const profileTabs = document.querySelector(".profile-tabs");
	const persInnerPass = document.querySelector(".personal-area__inner-pass");

	if (persInnerPass.style.display = 'none') {
		persInnerPass.style.display = 'flex';
		persInnerStr.style.display = 'none';
		persInner.style.display = "none"
		profileTabs.style.display = "none"
	}
}


function editingCancel() {
	const persInnerStr = document.querySelector(".personal-area__inner-str");
	const persInner = document.querySelector(".personal-area__inner");
	const profileTabs = document.querySelector(".profile-tabs");
	const persInnerPass = document.querySelector(".personal-area__inner-pass");

	persInnerPass.style.display = 'none';
	persInnerStr.style.display = 'none';
	persInner.style.display = "flex"
	profileTabs.style.display = "block"
}

function filterShow() {
	const filterOptions = document.querySelector(".order__filter-options");
	const orderNewBtn = document.querySelector(".order__new-virtual");
	filterOptions.classList.toggle("active");
	orderNewBtn.classList.toggle("active");
}









