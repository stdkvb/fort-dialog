const takeControlMenu = () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('#burger')
	const close = document.querySelector('#close-menu')
	const menu = document.querySelector('#menu')
	const logo = document.querySelector('#logo')
	const bar = document.querySelector('#bar')
	const mobileMenu = document.querySelector('#mobile-menu')
	const subMenuButton = document.querySelector('#submenu-button')
	const closeSubMenuButton = document.querySelector('#submenu-close')
	const subMenu = document.querySelector('#sub-menu')

	function openMenu() {
		burger.style.display = 'none'
		close.style.display = 'block'
		menu.classList.add('active')
		mobileMenu.classList.add('active')
		logo.classList.add('active')
		bar.classList.add('active')
		if (window.innerWidth <= 1800) {
			body.classList.add('lock')
		}
	}

	function closeMenu() {
		burger.style.display = 'block'
		close.style.display = 'none'
		menu.classList.remove('active')
		mobileMenu.classList.remove('active')
		logo.classList.remove('active')
		bar.classList.remove('active')
		if (window.innerWidth <= 1800) {
			body.classList.remove('lock')
		}
	}

	function openSubMenu() {
		subMenu.classList.add('active')
		subMenuButton.classList.add('active')
	}

	function closeSubMenu() {
		subMenu.classList.remove('active')
		subMenuButton.classList.remove('active')
	}

	burger.addEventListener('click', () => {
		closeSubMenu()
		openMenu()
	})

	close.addEventListener('click', () => {
		closeMenu()
	})

	subMenuButton.addEventListener('click', () => {
		if (window.innerWidth > 991) {
			closeMenu()
		}
		openSubMenu()
	})

	closeSubMenuButton.addEventListener('click', () => {
		closeSubMenu()
	})
}

export default takeControlMenu

