import takeControlMenu from './ElementsControllers/MenuController'
import takeControlDropdown from './ElementsControllers/DropdownController'
import takeControlCustomSelect from './ElementsControllers/CustomSelectController'
import takeControlNumberInput from './ElementsControllers/NumberInputController'

import takeControlFavorite from './ElementsControllers/FavoriteController'
import CookieController from './ElementsControllers/CookieController'
import takeControlModal from './ElementsControllers/ModalController'
import takeControlTabs from './ElementsControllers/TabsController'
import addPhoneMaskListeners from './listeners/addPhoneMaskListeners'
import takeControlTimer from './ElementsControllers/TimerController'
import takeControlAccordion from './ElementsControllers/AccordionController'
import takeControlComments from './ElementsControllers/CommentsController'
import CounterItemController from './ElementsControllers/CounterItemController'
import addFileNameListeners from './listeners/addFileNameListener'
import addRatingListener from './listeners/addRatingListener'
import addFormListeners from './listeners/addFormListeners'
import addModalListener from './listeners/addModalListener'

takeControlDropdown()
takeControlMenu()

// accordions init
takeControlAccordion('.footer__top', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

//swipers init
new Swiper('.partners__first', {
	slidesPerView: 'auto',
	watchOverflow: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false
	},
	autoHeight: true,
	loop: true,
	speed: 4000
})

new Swiper('.partners__second', {
	slidesPerView: 'auto',
	watchOverflow: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true
	},
	loop: true,
	speed: 4000
})

new Swiper('.resources__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.projects-section__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

// addPhoneMaskListeners()
// addRatingListener()
// addModalListener()

// addFormListeners()

// takeControlCustomSelect('custom-select')
// takeControlNumberInput()
// takeControlFavorite()
// CookieController('.cookie-container', '.cookie-accept')
// takeControlModal()
// takeControlTabs()
// takeControlTimer()
// takeControlComments()
// addFileNameListeners()

// /* Код ниже для возвращения исходной высоты мобильному меню (100vh)
// после ресайза экрана */

// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01
// // Then we set the value in the --vh custom property to the root of the document
// // We listen to the resize event
// window.addEventListener('resize', () => {
// 	// We execute the same script as before
// 	let vh = window.innerHeight * 0.01
// })

// //swipers init
// const firstScreenSwiper = new Swiper('.first-screen', {
// 	pagination: {
// 		el: '.first-screen .swiper-pagination',
// 		type: 'bullets',
// 		clickable: true
// 	},
// 	loop: false,
// 	slidesPerView: 1,
// 	watchOverflow: true,
// 	slidesPerGroup: 1,
// 	autoplay: {
// 		delay: 5000,
// 		stopOnLastSlide: false,
// 		disableOnInteraction: false
// 	},
// 	autoHeight: true
// })

// const RestaurantSwiper = new Swiper('.restaurant-photo__slider', {
// 	loop: false,
// 	watchOverflow: true,
// 	slidesPerGroup: 1,
// 	navigation: {
// 		nextEl: '.restaurant-photo__slider .swiper-navigation-next',
// 		prevEl: '.restaurant-photo__slider .swiper-navigation-prev'
// 	}
// })

// // const RestaurantGallerySwiper = new Swiper ('.restaurant-gallery__slider', {
// // 	loop: false,
// // 	watchOverflow: true,
// // 	slidesPerGroup: 1,
// // 	navigation: {
// // 		nextEl: '.swiper-navigation-next',
// // 		prevEl: '.swiper-navigation-prev'
// // 	},
// // 	breakpoints: {
// // 		360: {
// // 			spaceBetween: 0,
// // 		},
// // 		576: {
// // 			spaceBetween: 10,
// // 			slidesPerView: 1.5
// // 		},
// // 		992: {
// // 			spaceBetween: 20,
// // 			slidesPerView: 2.5
// // 		}
// // 	}
// // })

// // Coffee slider
// const CoffeeMainSwiper = new Swiper('.coffee-preview__slider_main', {
// 	effect: 'fade',
// 	navigation: {
// 		nextEl: '.swiper-navigation-next',
// 		prevEl: '.swiper-navigation-prev'
// 	},
// 	slidesPerView: 1,
// 	slidesPerGroup: 1,
// 	simulateTouch: false,
// 	grabCursor: false,
// 	autoHeight: false,
// 	thumbs: {
// 		// Свайпер с миниатюрами
// 		// и его настройки
// 		swiper: {
// 			el: '.coffee-preview__slider_secondary',
// 			slidesPerView: 5,
// 			slideToClickedSlide: true,
// 			touchRatio: 1,
// 			direction: 'vertical',
// 			spaceBetween: 20
// 		}
// 	}
// })

// // coffee-tab's Slider
// const CoffeeTabsSwiper = new Swiper('.coffee-tabs__tabs', {
// 	slidesPerView: 'auto',
// 	watchOverflow: true,
// 	spaceBetween: 30
// })

// // coffee-viewed's Slider
// const CoffeeViewedSwiper = new Swiper('.coffee-viewed__slider', {
// 	slidesPerView: 'auto',
// 	watchOverflow: true,
// 	spaceBetween: 20,
// 	navigation: {
// 		nextEl: '.coffee-viewed__slider .swiper-navigation-next',
// 		prevEl: '.coffee-viewed__slider .swiper-navigation-prev'
// 	}
// })

// // coffee-whosale-partners's Slider
// if (document.querySelectorAll('.coffee-whosale-partners__slider .swiper-slide').length > 1) {
// 	const CoffeeWhosaleSwiper = new Swiper('.coffee-whosale-partners__slider', {
// 		slidesPerView: 1,
// 		// watchOverflow: true,
// 		loop: true,
// 		spaceBetween: 90,
// 		autoplay: {
// 			delay: 3000,
// 			stopOnLastSlide: false,
// 			disableOnInteraction: false
// 		},
// 		breakpoints: {
// 			576: {
// 				slidesPerView: 'auto'
// 			}
// 		}
// 	})
// }

// // catalog tab's Slider
// const CatalogTabsSwiper = new Swiper('.catalog__tabs', {
// 	slidesPerView: 'auto',
// 	watchOverflow: true,
// 	spaceBetween: 20
// })

// // food ingredients Slider
// const IngredientsSwiper = new Swiper('.cake-detail__ingredients-swiper', {
// 	slidesPerView: 'auto',
// 	spaceBetween: 10,
// 	navigation: {
// 		nextEl: '.swiper-navigation-next',
// 		prevEl: '.swiper-navigation-prev'
// 	},
// 	breakpoints: {
// 		576: {
// 			spaceBetween: 20
// 		}
// 	}
// })

// // order history Slider
// const orderHistorySwipers = document.querySelectorAll('.history__order .swiper')
// const swiperPrev = document.querySelectorAll('.swiper-navigation-prev')
// const swiperNext = document.querySelectorAll('.swiper-navigation-next')

// for (let i = 0; i < orderHistorySwipers.length; i++) {
// 	orderHistorySwipers[i].classList.add('swiper-' + i)
// 	swiperPrev[i].classList.add('swiper-prev-' + i)
// 	swiperNext[i].classList.add('swiper-next-' + i)
// 	const HistorySwiper = new Swiper('.swiper-' + i, {
// 		slidesPerView: 'auto',
// 		spaceBetween: 10,
// 		navigation: {
// 			nextEl: '.swiper-next-' + i,
// 			prevEl: '.swiper-prev-' + i
// 		},
// 		breakpoints: {
// 			768: {
// 				spaceBetween: 20
// 			}
// 		}
// 	})
// }

// // order Slider
// const OrderSwiper = new Swiper('.order__swiper', {
// 	slidesPerView: 'auto',
// 	spaceBetween: 10,
// 	navigation: {
// 		nextEl: '.swiper-navigation-next',
// 		prevEl: '.swiper-navigation-prev'
// 	},
// 	breakpoints: {
// 		768: {
// 			spaceBetween: 20
// 		}
// 	}
// })

// // review Slider
// const ReviewSwiper = new Swiper('.direction__reviews-swiper', {
// 	slidesPerView: 'auto',
// 	spaceBetween: 20,
// 	navigation: {
// 		nextEl: '.swiper-navigation-next',
// 		prevEl: '.swiper-navigation-prev'
// 	}
// })

// // video-review Slider
// const VideoReviewSwiper = new Swiper('.direction__video-reviews-swiper', {
// 	slidesPerView: 'auto',
// 	spaceBetween: 20,
// 	navigation: {
// 		nextEl: '.swiper-navigation-next',
// 		prevEl: '.swiper-navigation-prev'
// 	}
// })

// takeControlAccordion('.course__accordion', '.accordion__list', {
// 	accordionItemSelector: '.accordion__item',
// 	accordionItemTogglerSelector: '.accordion__toggle',
// 	accordionItemContentSelector: '.accordion__content',
// 	accordionItemActiveClass: 'accordion__item_active'
// })

// // total bonus info
// if (document.querySelector('.total__bonus') !== null) {
// 	document.querySelector('.total__bonus svg').addEventListener('click', () => {
// 		document.querySelector('.total__info').classList.toggle('active')
// 	})

// 	document.querySelector('.total__info').addEventListener('click', () => {
// 		document.querySelector('.total__info').classList.remove('active')
// 	})
// }

// // video controller
// const playButtons = document.querySelectorAll('.video-controler')
// playButtons.forEach((elem) => {
// 	elem.addEventListener('click', () => {
// 		playButtons.forEach((elem) => {
// 			elem.classList.remove('active')
// 			elem.previousElementSibling.pause()
// 		})
// 		elem.classList.add('active')
// 		elem.previousElementSibling.play()
// 	})

// 	elem.previousElementSibling.addEventListener('click', () => {
// 		if (elem.classList.contains('active')) {
// 			elem.classList.remove('active')
// 			elem.previousElementSibling.pause()
// 		}
// 	})
// })

// // Counter
// if (document.querySelector('.numbers') != null) {
// 	new CounterItemController({
// 		countersElementsWrapperSelector: '.numbers',
// 		counterElementSelector: '.numbers__item',
// 		counterNumElementSelector: '.value',
// 		calcAnimationDelay: 2000,
// 		clearHoverDelay: 100
// 	})
// }

// //number with spaces
// const numbers = document.querySelectorAll('.number-with-spaces')
// numbers.forEach((elem) => {
// 	let numberWithSpace = elem.outerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
// 	elem.innerHTML = numberWithSpace
// })

