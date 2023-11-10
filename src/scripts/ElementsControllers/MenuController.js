const takeControlMenu = () => {
	const burgerBtn = document.querySelector('#burger-btn')
	const menu = document.querySelector('#menu')
	const LinkWithMenu = document.querySelectorAll('.header__mobile ~ .header__menu ._with_menu')


	function closeAllMenu() {
		menu.classList.remove('_active')
		document.body.classList.add('_lock')
	}


	burgerBtn.addEventListener('click', () => {
		closeAllMenu()
		menu.classList.add('_active')
	})

	LinkWithMenu.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.classList.toggle('_active')
		})
	})



	// close menu button
	const menuCloseButtons = document.querySelectorAll('.close-btn')
	menuCloseButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			closeAllMenu()
			document.body.classList.remove('_lock')
		})
	})
}

export default takeControlMenu
