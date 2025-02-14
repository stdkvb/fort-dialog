// custom select
function takeControlCustomSelect(id) {
	let x
	let i
	let j
	let l
	let ll
	let selElmnt
	let a
	let b
	let c
	/* look for any elements with the class "custom-select": */
	x = document.getElementsByClassName(id)
	l = x.length

	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName('select')[0]
		ll = selElmnt.length
		/* for each element, create a new DIV that will act as the selected item: */
		a = document.createElement('DIV')
		a.setAttribute('class', 'select-selected')
		a.innerHTML =
			'<div class="select-selected__value select-selected__placeholder ">' +
			selElmnt.options[selElmnt.selectedIndex].innerHTML +
			'</div>' +
			'<div class="arrow"></div>'
		x[i].appendChild(a)

		/* for each element, create a new DIV that will contain the option list: */
		b = document.createElement('UL')
		b.setAttribute('class', 'select-items select-hide')

		for (j = 1; j < ll; j++) {
			/* for each option in the original select element,
    create a new DIV that will act as an option item: */
			c = document.createElement('li')
			c.innerHTML = selElmnt.options[j].innerHTML
			c.addEventListener('click', function () {
				/* when an item is clicked, update the original select box,
        and the selected item: */
				document.querySelector('.select-input').value = this.innerHTML

				this.parentNode.parentNode.classList.add('has-success')
				let y
				let i
				let k
				let s
				let h
				let sl
				let yl
				s = this.parentNode.parentNode.getElementsByTagName('select')[0]
				sl = s.length
				h = this.parentNode.previousSibling

				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i
						h.innerHTML =
							'<div class="select-selected__value">' + this.innerHTML + '</div>' + '<div class="arrow"></div>'
						y = this.parentNode.getElementsByClassName('selected-item')
						yl = y.length

						for (k = 0; k < yl; k++) {
							y[k].removeAttribute('class')
						}
						this.setAttribute('class', 'selected-item')
						break
					}
				}
				h.click()
			})
			b.appendChild(c)
		}

		x[i].appendChild(b)
		a.addEventListener('click', function (e) {
			/* when the select box is clicked, close any other select boxes,
      and open/close the current select box: */
			e.stopPropagation()
			closeAllSelect(this)
			this.nextSibling.classList.toggle('select-hide')
			this.parentNode.classList.toggle('open')
		})
	}

	function closeAllSelect(elmnt) {
		/* a function that will close all select boxes in the document,
  except the current select box: */
		let x
		let y
		let i
		let xl
		let yl
		const arrNo = []
		x = document.getElementsByClassName('select-items')
		y = document.getElementsByClassName('select-selected')
		xl = x.length
		yl = y.length

		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			}
		}

		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add('select-hide')
			}
		}
	}
	/* if the user clicks anywhere outside the select box,
then close all select boxes: */
	document.addEventListener('click', closeAllSelect)
}

export default takeControlCustomSelect
