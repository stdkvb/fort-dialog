import Pristine from './Pristine'
// import takeControlModal from './ModalController';

const takeControlForms = () => {
	const careerForm = document.querySelector('.career-section__form form')
	if (careerForm !== null) {
		const careerValidator = new Pristine(careerForm)
		careerForm.addEventListener('submit', function (e) {
			if (careerValidator.validate() != true) {
				e.preventDefault()
			}
		})
	}

	const questionsForm = document.querySelector('.questions__form form')
	if (questionsForm !== null) {
		const questionsValidator = new Pristine(questionsForm)
		questionsForm.addEventListener('submit', function (e) {
			if (questionsValidator.validate() != true) {
				e.preventDefault()
			}
		})
	}

	const popupForm = document.querySelector('.popup__form form')
	if (popupForm !== null) {
		const popupValidator = new Pristine(popupForm)
		popupForm.addEventListener('submit', function (e) {
			if (popupValidator.validate() != true) {
				e.preventDefault()
			}
		})
	}

	// password toggle
	// const passwordToggle = document.querySelectorAll('.toggle-show-password-btn')
	// passwordToggle.forEach((elem) => {
	// 	elem.addEventListener('click', (e) => {
	// 		const type = elem.previousElementSibling.getAttribute('type') === 'password' ? 'text' : 'password'
	// 		elem.previousElementSibling.setAttribute('type', type)
	// 	})
	// })
}

export default takeControlForms

