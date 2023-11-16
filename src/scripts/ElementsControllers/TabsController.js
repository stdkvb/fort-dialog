const takeControlTabs = () => {
	const tabs = document.querySelectorAll('.tab')
	function tabClicks(tabClickEvent) {
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove('active')
		}
		let clickedTab = tabClickEvent.currentTarget
		clickedTab.classList.add('active')
		tabClickEvent.preventDefault()
		let tabContents = document.querySelectorAll('.tab-content')
		for (let i = 0; i < tabContents.length; i++) {
			tabContents[i].classList.remove('active')
		}
		let anchorReference = tabClickEvent.target
		let activeTabId = anchorReference.getAttribute('href')
		let activeTabContent = document.querySelector(activeTabId)
		activeTabContent.classList.add('active')
	}
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabClicks)
	}
}

export default takeControlTabs

