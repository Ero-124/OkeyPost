
/* Вкладки для help-question__item  */

const item = document.getElementsByClassName("help-question__item");
for (let i = 0; i < item.length; i++) {
	item[i].addEventListener("click", function () {
		this.classList.toggle("active");
	})
}


/* Табы для profile-tabs__item */
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



const itemNotif = document.getElementsByClassName("notifications__item")


for (let i = 0; i < itemNotif.length; i++) {
	itemNotif[i].addEventListener('click', function () {
		this.classList.toggle("active");
	});
}