const takeControlMenu = () => {
	const menuButton = document.querySelector('#menu-button')
	const menu = document.querySelector('#menu')
	const logo = document.querySelector('#logo')
	const bar = document.querySelector('#bar')
	const mobileMenu = document.querySelector('#mobile-menu')
	const subMenuButtons = document.querySelectorAll('.submenu__button')
	const subMenu = document.querySelector('#sub-menu')

	menuButton.addEventListener('click', () => {
		menuButton.classList.toggle('close')
		menu.classList.toggle('active')
		mobileMenu.classList.toggle('active')
		logo.classList.toggle('active')
		bar.classList.toggle('active')
		if (subMenu.classList.contains('active')) {
			subMenu.classList.remove('active')
			subMenuButtons.forEach((elem) => {
				elem.classList.remove('active')
			})
		}
		if (!document.body.classList.contains('lock')) {
			document.body.classList.add('lock')
		} else if (!subMenu.classList.contains('active')) {
			document.body.classList.remove('lock')
		}
	})

	subMenuButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			subMenuButtons.forEach((elem) => {
				elem.classList.toggle('active')
			})
			subMenu.classList.toggle('active')
			if (!document.body.classList.contains('lock')) {
				document.body.classList.toggle('lock')
			} else if (!menu.classList.contains('active')) {
				document.body.classList.remove('lock')
			}
			if (menu.classList.contains('active') && window.innerWidth > 991) {
				menuButton.classList.remove('close')
				menu.classList.remove('active')
				logo.classList.remove('active')
				bar.classList.remove('active')
			}
		})
	})
}

export default takeControlMenu

