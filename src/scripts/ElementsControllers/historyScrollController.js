const takeControlHistoryScroll = () => {
	const years = document.querySelectorAll('.history__year')

	const options = {
		rootMargin: '0px',
		threshold: 0
	}

	const callback = function (entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				document.querySelectorAll('.history__links a').forEach((el) => {
					el.classList.remove('active')
				})
				document.querySelector(`.history__links a[href="#${entry.target.getAttribute('id')}"]`).classList.add('active')
			}
			if (!entry.isIntersecting) {
				document
					.querySelector(`.history__links a[href="#${entry.target.getAttribute('id')}"]`)
					.classList.remove('active')
			}
		})
	}

	const observer = new IntersectionObserver(callback, options)

	years.forEach((year) => observer.observe(year))
}

export default takeControlHistoryScroll

