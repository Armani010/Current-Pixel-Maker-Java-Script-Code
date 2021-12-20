const table = document.body.querySelector("#pixelCanvas");
const myForm = document.body.querySelector("#sizePicker");

function makeGrid() {
	table.innerHTML=""
	const currentHeight = document.body.querySelector("#inputHeight").value
	const currentWidth = document.body.querySelector("#inputWidth").value
	for (row = 0; row < currentHeight; row++) {
		const newRow = table.insertRow()
		for (column = 0; column < currentWidth; column++) {
			newRow.insertCell()
		}
	}
};

myForm.addEventListener("submit", function (event) {
	event.preventDefault();
	makeGrid();
});

table.addEventListener('click', function(event) {
	const currentColor = document.body.querySelector("#colorPicker").value
	if (event.target.nodeName === 'TD') {
		if (event.target.style.backgroundColor === currentColor) {
			event.target.style.backgroundColor = null;
		}
		else {
			event.target.style.backgroundColor = currentColor;
		}
	}
});
