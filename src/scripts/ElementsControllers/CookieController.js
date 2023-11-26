const cookieIsAcceptedStatusStorageKey = 'COOKIE_IS_ACCEPTED'

class CookieController {
	constructor(cookieContainerSelector, cookieAcceptButtonSelector) {
		const cookieContainerElement = document.querySelector(cookieContainerSelector)
		const cookieAcceptButtonElements = cookieContainerElement.querySelectorAll(cookieAcceptButtonSelector)

		this._cookieContainer = cookieContainerElement

		const cookieIsAccepted = this._checkCookieIsAccepted()

		if (!cookieIsAccepted) {
			this._showCookieContainer()
		}

		cookieAcceptButtonElements.forEach((cookieAcceptButtonElement) => {
			cookieAcceptButtonElement.addEventListener('click', (event) => {
				this._setCookieIsAccepted()
				this._hideCookieContainer()
			})
		})
	}

	_checkCookieIsAccepted = () => {
		return localStorage.getItem(cookieIsAcceptedStatusStorageKey)
	}

	_setCookieIsAccepted = () => {
		localStorage.setItem(cookieIsAcceptedStatusStorageKey, true)
	}

	_hideCookieContainer() {
		this._cookieContainer.classList.remove('active')
	}

	_showCookieContainer() {
		this._cookieContainer.classList.add('active')
	}
}

const takeControlCookie = function () {
	new CookieController('.cookie', '.cookie-accept')
}

export default takeControlCookie

