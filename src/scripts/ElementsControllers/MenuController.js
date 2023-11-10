const takeControlMenu = () => {
	const menuButton = document.querySelector('#menu-button')
	const menu = document.querySelector('#menu')
	const logo = document.querySelector('#logo')
	const bar = document.querySelector('#bar')
	const mobileMenu = document.querySelector('#mobile-menu')

	menuButton.addEventListener('click', () => {
		menuButton.classList.toggle('close')
		menu.classList.toggle('active')
		mobileMenu.classList.toggle('active')
		logo.classList.toggle('active')
		bar.classList.toggle('active')
		document.body.classList.toggle('lock')
	})
}

export default takeControlMenu

