import takeControlModal from '../ElementsControllers/ModalController'

function addModalListener() {
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('close-popup')) {
			takeControlModal()
		}
	})
}

export default addModalListener
