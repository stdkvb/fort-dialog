import Pristine from './Pristine'
// import takeControlModal from './ModalController';

const takeControlForms = () => {
	const workRequestForm = document.querySelector('.career-section__form')
	if (workRequestForm !== null) {
		const workRequestValidator = new Pristine(workRequestForm)
		workRequestForm.addEventListener('submit', function (e) {
			if (workRequestValidator.validate() != true) {
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

