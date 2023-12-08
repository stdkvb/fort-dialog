const takeControlMenu = () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('#burger')
	const close = document.querySelector('#close-menu')
	const menu = document.querySelector('#menu')
	const logo = document.querySelector('#logo')
	const bar = document.querySelector('#bar')
	const mobileMenu = document.querySelector('#mobile-menu')
	const subMenuButton = document.querySelector('#submenu-button')
	const closeSubMenuButtons = document.querySelectorAll('.submenu__close')
	const subMenu = document.querySelector('#sub-menu')
	const solutions = document.querySelector('#solutions')
	const solutionsButton = document.querySelector('#solutions-button')
	const services = document.querySelector('#services')
	const servicesButton = document.querySelector('#services-button')
	const projects = document.querySelector('#projects')
	const projectsButton = document.querySelector('#projects-button')

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

	function openSolutions() {
		solutions.classList.add('active')
		solutionsButton.classList.add('active')
	}

	function closeSolutions() {
		solutions.classList.remove('active')
		solutionsButton.classList.remove('active')
	}

	function openServices() {
		services.classList.add('active')
		servicesButton.classList.add('active')
	}

	function closeServices() {
		services.classList.remove('active')
		servicesButton.classList.remove('active')
	}

	function openProjects() {
		projects.classList.add('active')
		projectsButton.classList.add('active')
	}

	function closeProjects() {
		projects.classList.remove('active')
		projectsButton.classList.remove('active')
	}

	burger.addEventListener('click', () => {
		closeSubMenu()
		closeSolutions()
		closeServices()
		closeProjects()
		openMenu()
	})

	close.addEventListener('click', () => {
		closeMenu()
	})

	subMenuButton.addEventListener('click', () => {
		closeSolutions()
		closeServices()
		closeProjects()
		if (window.innerWidth > 991) {
			closeMenu()
		}
		if (subMenuButton.classList.contains('active')) {
			closeSubMenu()
		} else {
			openSubMenu()
		}
	})

	solutionsButton.addEventListener('click', () => {
		closeSubMenu()
		closeServices()
		closeProjects()
		if (window.innerWidth > 991) {
			closeMenu()
		}
		if (solutionsButton.classList.contains('active')) {
			closeSolutions()
		} else {
			openSolutions()
		}
	})

	servicesButton.addEventListener('click', () => {
		closeSubMenu()
		closeSolutions()
		closeProjects()
		if (window.innerWidth > 991) {
			closeMenu()
		}
		if (servicesButton.classList.contains('active')) {
			closeServices()
		} else {
			openServices()
		}
	})

	projectsButton.addEventListener('click', () => {
		closeSubMenu()
		closeServices()
		closeProjects()
		if (window.innerWidth > 991) {
			closeMenu()
		}
		if (projectsButton.classList.contains('active')) {
			closeProjects()
		} else {
			openProjects()
		}
	})

	closeSubMenuButtons.forEach((el) => {
		el.addEventListener('click', () => {
			closeSubMenu()
			closeSolutions()
			closeServices()
			closeProjects()
		})
	})
}

export default takeControlMenu

