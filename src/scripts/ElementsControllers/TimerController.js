const takeControlTimer = () => {

	const timerLink = document.querySelector('.timer_link')
	const timer = document.querySelector('#timer')
	let time

	if (timerLink !== null) {
		const outTimer = () => {
			timerLink.classList.add('_disabled')
			timerLink.classList.remove('_active')

			time = 59

			timer.textContent = " 0:" + time

			const outTimerInterval = setInterval(() => {
				if (time <= 0) {
					timerLink.classList.remove('_disabled')
					timerLink.classList.add('_active')
					clearInterval(outTimerInterval)
				} else if (time <= 10) {
					timer.textContent = " 0:0" + --time
				} else {
					timer.textContent = " 0:" + --time
				}			
			}, 1000)
		}	
		
		outTimer()

		timerLink.addEventListener("click", (e) => {
			e.preventDefault()
			outTimer()
		})
		
	}	
}

export default takeControlTimer
