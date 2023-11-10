import handlePhoneMask from '../ElementsControllers/PhoneMask'

function addPhoneMaskListeners() {
	document.addEventListener('input', (e) => {
		if (e.target.hasAttribute('type') && e.target.getAttribute('type') === 'tel') {
			handlePhoneMask(e)
		}
	})
	document.addEventListener('focus', (e) => {
		if (e.target.hasAttribute('type') && e.target.getAttribute('type') === 'tel') {
			handlePhoneMask(e)
		}
	})
	document.addEventListener('blur', (e) => {
		if (e.target.hasAttribute('type') && e.target.getAttribute('type') === 'tel') {
			handlePhoneMask(e)
		}
	})
	document.addEventListener('keydown', (e) => {
		if (e.target.hasAttribute('type') && e.target.getAttribute('type') === 'tel') {
			handlePhoneMask(e)
		}
	})
}

export default addPhoneMaskListeners
