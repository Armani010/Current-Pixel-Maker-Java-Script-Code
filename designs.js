const table = document.body.querySelector("#pixelCanvas")
const myForm = document.body.querySelector("#sizePicker")

function makeGrid() {
	table.innerHTML=""
	let currentHeight = document.body.querySelector("#inputHeight").value
	let currentWidth = document.body.querySelector("#inputWidth").value
	for (row = 0; row < currentHeight; row++) {
		let newRow = table.insertRow()
		for (column = 0; column < currentWidth; column++) {
			newRow.insertCell()
		}
	}
};

myForm.addEventListener("submit", function (event) {
	event.preventDefault();
	makeGrid();
});

table.addEventListener('click', function(evt) {
	let currentColor = document.body.querySelector("#colorPicker").value
	if (evt.target.nodeName === 'TD') {
		if (evt.target.style.backgroundColor = currentColor) {
			evt.target.style.backgroundColor = null;
		}
		else {
			evt.target.style.backgroundColor = currentColor;
		}
	}
});
