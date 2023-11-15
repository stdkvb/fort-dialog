const takeControlTabs = () => {
	const coffeeTabs = document.querySelectorAll('.coffee-tabs__tab')
	const firstCoffeeTab = document.getElementById('coffee-tab-1')
	const secondCoffeeTab = document.getElementById('coffee-tab-2')
	const thirdCoffeeTab = document.getElementById('coffee-tab-3')
	const coffeeTabContents = document.querySelectorAll('.coffee-tabs__content')
	const firstCoffeeTabContent = document.getElementById('coffee-tab-content-1')
	const secondCoffeeTabContent = document.getElementById('coffee-tab-content-2')
	const thirdCoffeeTabContent = document.getElementById('coffee-tab-content-3')

	if (firstCoffeeTab !== null) {
		function resetCooffeeActiveTabs() {
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
}

export default takeControlTabs

