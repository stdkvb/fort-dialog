import Pristine from './Pristine'
// import takeControlModal from './ModalController';

const takeControlForms = () => {
	const workRequestForm = document.querySelector('.work-request__form form')
	if (workRequestForm !== null) {
		const workRequestValidator = new Pristine(workRequestForm)
		workRequestForm.addEventListener('submit', function (e) {
			if (workRequestValidator.validate() != true) {
				e.preventDefault()
			}
		})
	}

	const callRequestForm = document.querySelector('.call-request__form form')
	if (callRequestForm !== null) {
		const callRequestValidator = new Pristine(callRequestForm)
		callRequestForm.addEventListener('submit', function (e) {
			if (callRequestValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const reviewForms = document.querySelectorAll('.review__form form')
	if (reviewForms.length > 0) {
		reviewForms.forEach((elem) => {
			const reviewValidator = new Pristine(elem)
			elem.addEventListener('submit', function (e) {
				if (reviewValidator.validate() !== true) {
					e.preventDefault()
				}
			})
		})
	}

	const commentReviewForms = document.querySelectorAll('.coffee-review__comment form')
	if (commentReviewForms.length > 0) {
		commentReviewForms.forEach((elem) => {
			const commentReviewValidator = new Pristine(elem)
			elem.addEventListener('submit', function (e) {
				if (commentReviewValidator.validate() !== true) {
					e.preventDefault()
				}
			})
		})
	}

	const registrationForm = document.querySelector('.registration__form form')
	if (registrationForm !== null) {
		const registrationValidator = new Pristine(registrationForm)
		registrationForm.addEventListener('submit', function (e) {
			if (registrationValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const registrationConfirmForm = document.querySelector('.registration-confirm__form form')
	if (registrationConfirmForm !== null) {
		const registrationConfirmValidator = new Pristine(registrationConfirmForm)
		registrationConfirmForm.addEventListener('submit', function (e) {
			if (registrationConfirmValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const authorizationForm = document.querySelector('.authorization__form form')
	if (authorizationForm !== null) {
		const authorizationValidator = new Pristine(authorizationForm)
		authorizationForm.addEventListener('submit', function (e) {
			if (authorizationValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const passwordRecovery = document.querySelector('.password-recovery form')
	if (passwordRecovery !== null) {
		const passwordRecoveryValidator = new Pristine(passwordRecovery)
		passwordRecovery.addEventListener('submit', function (e) {
			if (passwordRecoveryValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const passwordRecoveryConfirmForm = document.querySelector('.password-recovery-confirm__form form')
	if (passwordRecoveryConfirmForm !== null) {
		const passwordRecoveryConfirmValidator = new Pristine(passwordRecoveryConfirmForm)
		passwordRecoveryConfirmForm.addEventListener('submit', function (e) {
			if (passwordRecoveryConfirmValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const passwordRecoveryNewForm = document.querySelector('.password-recovery-new__form form')
	if (passwordRecoveryNewForm !== null) {
		const passwordRecoveryNewValidator = new Pristine(passwordRecoveryNewForm)
		passwordRecoveryNewForm.addEventListener('submit', function (e) {
			if (passwordRecoveryNewValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const profileForm = document.querySelector('.profile__form form')
	if (profileForm !== null) {
		const profileValidator = new Pristine(profileForm)
		profileForm.addEventListener('submit', function (e) {
			if (profileValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	const addressForm = document.querySelector('.address-adding form')
	if (addressForm !== null) {
		const addressValidator = new Pristine(addressForm)
		addressForm.addEventListener('submit', function (e) {
			if (addressValidator.validate() !== true) {
				e.preventDefault()
			}
		})
	}

	// password toggle
	const passwordToggle = document.querySelectorAll('.toggle-show-password-btn')
	passwordToggle.forEach((elem) => {
		elem.addEventListener('click', (e) => {
			const type = elem.previousElementSibling.getAttribute('type') === 'password' ? 'text' : 'password'
			elem.previousElementSibling.setAttribute('type', type)
		})
	})
}

export default takeControlForms
