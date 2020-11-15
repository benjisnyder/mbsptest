function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function submitTest() {
	var speed1 = document.getElementById('mbpsSpeed1').value;
	var speed2 = document.getElementById('mbpsSpeed2').value;
	var fileSize = document.getElementById('fileSize').value;
	var availableWidth = document.getElementById('graphic1').getBoundingClientRect().width;
	var graphic1 = document.getElementById('graphic1');
	var graphic2 = document.getElementById('graphic2');
	var graphic1Label = document.getElementById('graphic1Label');
	var graphic2Label = document.getElementById('graphic2Label');
	var bar1 = document.getElementById('graphicBar1');
	var bar2 = document.getElementById('graphicBar2');
	var transitionVal = 'width ';
	var seconds1 = fileSize/(8*speed1)*60;
	var seconds2 = fileSize/(8*speed2)*60;
	var transitionSpeed1 = seconds1 + 's';
	var transitionSpeed2 = seconds2 + 's';
	
	graphic1.style.display = 'block';
	graphic2.style.display = 'block';
	bar1.style.WebkitTransition = '';
	bar1.style.MozTransition = '';
	bar2.style.WebkitTransition = '';
	bar2.style.MozTransition = '';
	bar1.style.width = 0;
	bar2.style.width = 0;

	setTimeout(function anim() {
		bar1.style.WebkitTransition = transitionVal + transitionSpeed1;
		bar1.style.MozTransition = transitionVal + transitionSpeed1;
		bar2.style.WebkitTransition = transitionVal + transitionSpeed2;
		bar2.style.MozTransition = transitionVal + transitionSpeed2;
		bar1.style.width = '100%';
		bar2.style.width = '100%';

		graphic1Label.innerHTML = '~' + round(seconds1/60, 4) + ' minutes';
		graphic2Label.innerHTML = '~' + round(seconds2/60, 4) + ' mins';
	}, 10);
}