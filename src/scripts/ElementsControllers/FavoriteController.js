const takeControlFavorite = () => {
	const favoriteItems = document.querySelectorAll('.favorite');

	favoriteItems.forEach((elem) => {
		elem.addEventListener('click', function (e) {
			e.preventDefault()
			elem.classList.toggle('_active')
		})
	})
}

export default takeControlFavorite