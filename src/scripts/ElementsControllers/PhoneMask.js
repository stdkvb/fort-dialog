// function handlePhoneMask(event) {
// 	const phoneNumberInput = event.target
// 	let digits = phoneNumberInput.value.replace(/\D/g, '')

// 	if (event.keyCode === 8 && digits.length > 0) {
// 		digits = digits.slice(0, -1)
// 	}

// 	if (event.keyCode === 46 && digits.length < 11) {
// 		digits += phoneNumberInput.value.charAt(digits.length)
// 	}

// 	if (digits.length <= 10) {
// 		let maskedNumber = '+7 (' + digits.slice(1, 4)

// 		if (digits.length > 4) {
// 			maskedNumber += ') ' + digits.slice(4, 7)
// 		}
// 		if (digits.length > 7) {
// 			maskedNumber += ' ' + digits.slice(7, 9)
// 		}
// 		if (digits.length > 9) {
// 			maskedNumber += '-' + digits.slice(9)
// 		}
// 		phoneNumberInput.value = maskedNumber
// 	} else event.preventDefault()
// }

// export default handlePhoneMask

import IMask from 'imask'

const PhoneInputController = () => {
	const wrapper = document.querySelector('body')
	if (wrapper) {
		const inputPhoneMaskPaste = (input) => {
			if (input.getAttribute('data-type') == 'tel') {
				const phoneMask = new IMask(input, {
					mask: '+{7} (000) 000-00-00',
					prepare: function (appended, masked) {
						if (input.value.charAt(0) == '8') {
							console.log('error')
							// input.value = input.value.split('8').join(' ');
							return input.value.split('8').join(' ')
						}
						if (appended === '8' && masked.value === '') {
							return '+7'
						}
						return appended
					}
				})
			}
		}

		wrapper.addEventListener('click', (e) => {
			if (e.target.getAttribute('data-type') == 'tel') {
				inputPhoneMaskPaste(e.target)
			}
		})
		wrapper.addEventListener('keyup', (e) => {
			if (e.target.getAttribute('data-type') == 'tel') {
				inputPhoneMaskPaste(e.target)
			}
		})
	}
}

export { PhoneInputController }

