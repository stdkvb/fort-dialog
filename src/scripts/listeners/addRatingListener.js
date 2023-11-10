import takeControlRating from '../ElementsControllers/RatingController'

function addRatingListeners() {
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('rating__item')) {
			takeControlRating()
		}
	})
}

export default addRatingListeners
