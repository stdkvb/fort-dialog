const takeControlUpButton = () => {
	const upButton = document.querySelector('.up')
	upButton.addEventListener('click', () => {
		window.scroll(0, 0)
	})

	window.addEventListener('scroll', () => {
		if (window.scrollY !== 0) {
			upButton.classList.add('active')
		} else {
			upButton.classList.remove('active')
		}
	})
}

export default takeControlUpButton

