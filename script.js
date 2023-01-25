const container = document.querySelector('.container');
const eventBtnClick = document.querySelector('.event--btn_click');
const eventBtnOver = document.querySelector('.event--btn_over');
const clearBoard = document.querySelector('.clear--board');

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
	return `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
}

let hexColor = Math.floor(Math.random()*16777215).toString(16);


function createGrid(row, col) {
	for(let i = 0; i < row; i++) {
		const row = document.createElement('div');
		row.classList.add('square');
		container.appendChild(row);
		// for(let j = 0; j <= col; j++) {
		// 	const col = document.createElement('div');
		// 	col.classList.add('square');
		// 	container.appendChild(col);
		// }
	}
}
createGrid(504);
const square = [...document.querySelectorAll('.square')];

function randomSquare() {
	return Math.floor(Math.random() * square.length);
}

// DON'T DELETE
// setInterval(() => {
// 	square[randomSquare()].style.backgroundColor = randomColor();
// },1500);

function squareEvent(e) {
	const target = e.target;
	if(!e.target.classList.contains('square')) return;
	target.style.backgroundColor = randomColor();
	target.style.boxShadow = `0 0 2px #fff, 0 0 10px #fff`;

	setTimeout(() => {
		target.style.backgroundColor = '#1d1d1d';
		target.style.boxShadow = '0 0 2px #000';
	},600);
}

function squarePaint(e) {
		const target = e.target;
		if(!e.target.classList.contains('square')) return;
		target.style.backgroundColor = randomColor();
		target.style.boxShadow = `0 0 2px #fff, 0 0 10px #fff`;
}

container.addEventListener('click', squarePaint);

eventBtnClick.addEventListener('click', function(e){
	 container.addEventListener('click', squarePaint);
   container.removeEventListener('mouseover', squareEvent);
});

eventBtnOver.addEventListener('click', function(e) {
		clear();
	  container.addEventListener('mouseover', squareEvent);
    container.removeEventListener('click', squarePaint);
});


function clear() {
	square.forEach((item, i) => {
		item.style.backgroundColor = '#1d1d1d';
		item.style.boxShadow = '0 0 2px #000';
	});
}

clearBoard.addEventListener('click', function(e) {
	clear();
});







