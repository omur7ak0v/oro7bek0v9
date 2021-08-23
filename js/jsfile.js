const ttt = document.querySelectorAll('.ttt'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 7000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 7000);
}

function slidefun(n) {
	
	let i;
	for(i = 0; i < ttt.length;i++){
		ttt[i].style.display = "none";
	}

	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > ttt.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = ttt.length;
	   }

	ttt[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}