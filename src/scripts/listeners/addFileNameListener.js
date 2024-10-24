const addFileNameListeners = () => {
	const inputFilesContainer = document.querySelectorAll('.input__container_file')

	if (inputFilesContainer != null) {
		inputFilesContainer.forEach((elem) => {
			const inputFile = elem.querySelector('input')
			const inputButton = elem.querySelector('.file-button')

			inputFile.addEventListener('change', () => {
				const filesNames = []
				console.log(inputFile.files)

				;[...inputFile.files].forEach((file) => {
					filesNames.push(file.name)
				})

				inputButton.innerText = filesNames.join(', ')
			})
		})
	}
}

export default addFileNameListeners

