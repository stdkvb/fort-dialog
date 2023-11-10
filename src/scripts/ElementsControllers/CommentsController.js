const takeControlComments = () => {
	// const answerForms = document.querySelectorAll('')
	const answerButtons = document.querySelectorAll('.btn_answer')

	if (answerButtons.length != 0) {
		answerButtons.forEach((elem) => {
			elem.addEventListener('click', (e) => {
				e.preventDefault();
				const commentWrapper = elem.closest(".coffee-review__wrapper")
				commentWrapper.querySelector('.coffee-review__comment_answer').classList.add('_active')
			})
		})
	}
}

export default takeControlComments