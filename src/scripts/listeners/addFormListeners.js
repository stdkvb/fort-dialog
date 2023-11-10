import takeControlForms from '../ElementsControllers/FormController'

function addFormListeners() {
	document.addEventListener('click', (e) => {
		if (e.target.hasAttribute('type') && e.target.getAttribute('type') === 'submit') {
			takeControlForms()
		}
		if (e.target.classList.contains('children')) {
			takeControlForms()
		}
	})
}

export default addFormListeners
