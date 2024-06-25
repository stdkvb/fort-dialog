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

const enumerations = document.querySelectorAll('.enumeration__wrapper')
if (enumerations.length) {
	enumerations.forEach((enumeration) => {
		if (enumeration.offsetHeight > 50) {
			const enumerationLink = enumeration.querySelector('.enumeration__link')
			enumerationLink.classList.add('enumeration__link_active')
			const enumerationText = enumeration.querySelector('.enumeration__text')
			enumerationText.classList.add('enumeration__text_view')

			enumerationLink.addEventListener('click', (e) => {
				e.preventDefault()

				if (enumerationText.classList.contains('enumeration__text_active')) {
					enumerationText.classList.remove('enumeration__text_active')
					enumerationLink.textContent = 'Подробнее'
				} else {
					enumerationText.classList.add('enumeration__text_active')
					enumerationLink.textContent = 'Скрыть'
				}
			})
		}
	})
}

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
	autoHeight: false,
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

new Swiper('.reviews-section__slider', {
	spaceBetween: 15,
	pagination: {
		el: '.reviews-section__slider .swiper-pagination',
		clickable: 'true'
	},
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		576: {
			slidesPerView: 'auto'
		}
	}
})

// Review's iframes-player
const iframes = document.querySelectorAll('.reviews-section__iframe')
if (iframes.length) {
	iframes.forEach((frame) => {
		const poster = frame.querySelector('.iframe__poster')
		const iframe = frame.querySelector('iframe')
		const iframeSRC = iframe.getAttribute('src')

		poster.addEventListener('click', () => {
			poster.classList.add('iframe__poster_active')
			iframe.setAttribute('src', iframeSRC + '?rel=0&autoplay=1')
		})
	})
}

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

new Swiper('.documents__reviews', {
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

new Swiper('.benefits__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.univercity__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	}
})

new Swiper('.employees__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true'
	},
	autoHeight: false
})

// counter
new CounterItemController({
	countersElementsWrapperSelector: '.numbers',
	counterElementSelector: '.numbers__item',
	counterNumElementSelector: '.numbers__number span',
	calcAnimationDelay: 4000,
	clearHoverDelay: 100
})

//number with spaces
// setTimeout(() => {
// 	const numbers = document.querySelectorAll('.numbers__number span')
// 	numbers.forEach((elem) => {
// 		let numberWithSpace = elem.outerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
// 		elem.innerHTML = numberWithSpace
// 	})
// }, 5000);

