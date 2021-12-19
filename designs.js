const table = document.body.querySelector("#pixelCanvas")
const myForm = document.body.querySelector("#sizePicker")

myForm.addEventListener("submit", function (event) {
	event.preventDefault();
	makeGrid();
});

function makeGrid() {
	table.innerHTML=""
	let currentHeight = document.body.querySelector("#inputHeight").value
	let currentWidth = document.body.querySelector("#inputWidth").value
	for (row = 0; row < currentHeight; row++) {
		var newRow = table.insertRow()
		for (column = 0; column < currentWidth; column++) {
			newRow.insertCell()
		}
	}
}

table.addEventListener('click', function(evt) {
	let currentColor = document.body.querySelector("#colorPicker").value
	if (evt.target.nodeName === 'TD') {
		if (evt.target.style.backgroundColor = currentColor) {
			evt.target.style.backgroundColor = white;
		}
		else {
			evt.target.style.backgroundColor = currentColor;
		}
	}
});
