import takeControlMenu from './ElementsControllers/MenuController'
import takeControlDropdown from './ElementsControllers/DropdownController'
import takeControlModal from './ElementsControllers/ModalController'
import takeControlTabs from './ElementsControllers/TabsController'
import addPhoneMaskListeners from './listeners/addPhoneMaskListeners'
import takeControlAccordion from './ElementsControllers/AccordionController'
import addFileNameListeners from './listeners/addFileNameListener'
import addFormListeners from './listeners/addFormListeners'
import addModalListener from './listeners/addModalListener'
import takeControlHistoryScroll from './ElementsControllers/HistoryScrollController'
import takeControlCookie from './ElementsControllers/CookieController'
import takeControlUpButton from './ElementsControllers/UpButton'
import CounterItemController from './ElementsControllers/CounterItemController'

addFormListeners()
addFileNameListeners()
addPhoneMaskListeners()
addModalListener()
takeControlUpButton()
takeControlModal()
takeControlDropdown()
takeControlMenu()
takeControlTabs()
takeControlHistoryScroll()
takeControlCookie()

// accordions init
takeControlAccordion('.footer__top', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

takeControlAccordion('.enumeration', '.accordion__list', {
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

new Swiper('.services-section__swiper', {
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

new Swiper('.banner', {
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
})

new Swiper('.task__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.service-detail__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.solution-detail__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.about-company__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.documents__licenses', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.documents__certificates', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.documents__diplomas', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.media-detail__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

// counter
new CounterItemController({
	countersElementsWrapperSelector: '.numbers',
	counterElementSelector: '.numbers__item',
	counterNumElementSelector: '.numbers__number span',
	calcAnimationDelay: 4000,
	clearHoverDelay: 100
})

