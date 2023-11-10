const takeControlDropdown = function () {
	const selects = document.querySelectorAll('.dropdown__button')
	selects.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.classList.toggle('active')
		})
	})

	const options = document.querySelectorAll('.dropdown__option')
	options.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.parentElement.classList.remove('active')
			elem.parentElement.previousElementSibling.querySelector('span').innerHTML = elem.innerHTML
		})
	})
}

export default takeControlDropdown
