const takeControlTabs = () => {
	const coffeeTabs = document.querySelectorAll('.coffee-tabs__tab')
	const firstCoffeeTab = document.getElementById('coffee-tab-1')
	const secondCoffeeTab = document.getElementById('coffee-tab-2')
	const thirdCoffeeTab = document.getElementById('coffee-tab-3')
	const coffeeTabContents = document.querySelectorAll('.coffee-tabs__content')
	const firstCoffeeTabContent = document.getElementById('coffee-tab-content-1')
	const secondCoffeeTabContent = document.getElementById('coffee-tab-content-2')
	const thirdCoffeeTabContent = document.getElementById('coffee-tab-content-3')

	const cakeTabs = document.querySelectorAll('.cake-detail__tab')
	const firstCakeTab = document.getElementById('cake-tab-1')
	const secondCakeTab = document.getElementById('cake-tab-2')
	const cakeTabContents = document.querySelectorAll('.cake-detail__content')
	const firstCakeTabContent = document.getElementById('cake-tab-content-1')
	const secondCakeTabContent = document.getElementById('cake-tab-content-2')

	const orderTabs = document.querySelectorAll('.order__tab')
	const firstOrderTab = document.getElementById('order-tab-1')
	const secondOrderTab = document.getElementById('order-tab-2')
	const orderTabContents = document.querySelectorAll('.order__tab-content')
	const firstOrderTabContent = document.getElementById('order-tab-content-1')
	const secondOrderTabContent = document.getElementById('order-tab-content-2')

	const pickupTabs = document.querySelectorAll('.pickup__tab')
	const firstPickupTab = document.getElementById('pickup-tab-1')
	const secondPickupTab = document.getElementById('pickup-tab-2')
	const pickupTabContents = document.querySelectorAll('.pickup__tab-content')
	const firstPickupTabContent = document.getElementById('pickup-tab-content-1')
	const secondPickupTabContent = document.getElementById('pickup-tab-content-2')

	const courseTabs = document.querySelectorAll('.course__tab')
	const firstCourseTab = document.getElementById('course-tab-1')
	const secondCourseTab = document.getElementById('course-tab-2')
	const courseTabContents = document.querySelectorAll('.course__content')
	const firstCourseTabContent = document.getElementById('course-tab-content-1')
	const secondCourseTabContent = document.getElementById('course-tab-content-2')

	if (firstCoffeeTab !== null) {
		function resetCooffeeActiveTabs () {
			coffeeTabs.forEach((elem) => {
				elem.classList.remove('_active')
			})
			coffeeTabContents.forEach((elem) => {
				elem.classList.remove('_active')
			})
		}

		coffeeTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetCooffeeActiveTabs()
				elem.classList.add('_active')
			})
		})

		firstCoffeeTab.addEventListener('click', () => {
			firstCoffeeTabContent.classList.add('_active')
		})
		secondCoffeeTab.addEventListener('click', () => {
			secondCoffeeTabContent.classList.add('_active')
		})
		thirdCoffeeTab.addEventListener('click', () => {
			thirdCoffeeTabContent.classList.add('_active')
		})
	}

	if (firstCakeTab !== null) {
		function resetCakeActiveTabs () {
			cakeTabs.forEach((elem) => {
				elem.classList.remove('_active')
			})
			cakeTabContents.forEach((elem) => {
				elem.classList.remove('_active')
			})
		}

		cakeTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetCakeActiveTabs()
				elem.classList.add('_active')
			})
		})

		firstCakeTab.addEventListener('click', () => {
			firstCakeTabContent.classList.add('_active')
		})
		secondCakeTab.addEventListener('click', () => {
			secondCakeTabContent.classList.add('_active')
		})
	}

	if (firstOrderTab !== null) {
		function resetOrderActiveTabs () {
			orderTabs.forEach((elem) => {
				elem.classList.remove('_active')
			})
			orderTabContents.forEach((elem) => {
				elem.classList.remove('_active')
			})
		}

		orderTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetOrderActiveTabs()
				elem.classList.add('_active')
			})
		})

		firstOrderTab.addEventListener('click', () => {
			firstOrderTabContent.classList.add('_active')
		})
		secondOrderTab.addEventListener('click', () => {
			secondOrderTabContent.classList.add('_active')
		})
	}

	if (firstPickupTab !== null) {
		function resetPickupActiveTabs () {
			pickupTabs.forEach((elem) => {
				elem.classList.remove('_active')
			})
			pickupTabContents.forEach((elem) => {
				elem.classList.remove('_active')
			})
		}

		pickupTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetPickupActiveTabs()
				elem.classList.add('_active')
			})
		})

		firstPickupTab.addEventListener('click', () => {
			firstPickupTabContent.classList.add('_active')
		})
		secondPickupTab.addEventListener('click', () => {
			secondPickupTabContent.classList.add('_active')
		})
	}

	if (firstCourseTab !== null) {
		function resetCourseActiveTabs () {
			courseTabs.forEach((elem) => {
				elem.classList.remove('_active')
			})
			courseTabContents.forEach((elem) => {
				elem.classList.remove('_active')
			})
		}

		courseTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetCourseActiveTabs()
				elem.classList.add('_active')
			})
		})

		firstCourseTab.addEventListener('click', () => {
			firstCourseTabContent.classList.add('_active')
		})
		secondCourseTab.addEventListener('click', () => {
			secondCourseTabContent.classList.add('_active')
		})
	}
}

export default takeControlTabs
