const takeControlModal = () => {
	const popupLinks = document.querySelectorAll('.popup-link');

	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll('.lock-padding');
	const popupActive = document.querySelector('.popup._open');
	const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';

	let unlock = true;
	const timeout = 400; // Равна времени в transition
	// let pageHash =  document.location.hash;

	if (popupLinks.length > 0) {		
		
		popupLinks.forEach((elem) => {
			elem.addEventListener("click", function (e) {
				const popupName = elem.getAttribute('href').replace('#', '');
				const currentPopup = document.getElementById(popupName);
				popupOpen(currentPopup);
				e.preventDefault();
			});
		})
	}

	if (lockPadding.length > 0 && popupActive) {
		lockPadding.forEach((elem) => {
			elem.style.paddingRight = lockPaddingValue;
		})
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('_lock');
	}

	

	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		popupCloseIcon.forEach((elem) => {
			elem.addEventListener('click', function (e) {
				popupClose(elem.closest('.popup'));
				e.preventDefault();
			});
		})
	}

	const popupOpen = (currentPopup) => {
		if (currentPopup && unlock) {
			const popupActive = document.querySelector('.popup._open');
			if (popupActive) {
				popupClose(popupActive, false);
			} 
			bodyLock();

			if (currentPopup != null) {
				currentPopup.classList.add('_open');
				currentPopup.addEventListener('click', function (e) {
					if (!e.target.closest('.popup__content')) {
						popupClose(e.target.closest('.popup'));
					}
				});
			}
		}
	}

	const popupClose = (popupActive, doUnlock = true) => {
		if (unlock) {
			popupActive.classList.remove('_open');
			if (doUnlock) {
				bodyUnlock();
			}
		}
	}

	const bodyLock = () => {
		const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
	
		if (lockPadding.length > 0) {
			lockPadding.forEach((elem) => {
				elem.style.paddingRight = lockPaddingValue;
			})
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('_lock');
	
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}
	
	const bodyUnlock = () => {
		setTimeout(function () {
			if (lockPadding.length > 0) {
				lockPadding.forEach((elem) => {
					elem.style.paddingRight = '0px';
				})
			}
			body.style.paddingRight = '0px';
			body.classList.remove('_lock');
		}, timeout);
	
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}
}

export default takeControlModal