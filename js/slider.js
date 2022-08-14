
/* Slider Swiper profitable__swiper  */

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


/* Slider Swiper profitable__swiper-two  */
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
