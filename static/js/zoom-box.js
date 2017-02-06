
$(document).ready(function(){

	var cube = document.getElementById('cube')

	$('.side').click(function(){
		if (!$(this).hasClass('zoomed')) {
			zoomIn(this);
		} else {
			zoomOut();
		}
	});

	$('button').click(function(){
		zoomOut();
	});
	
});

function zoomIn(object) {
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var topCorrection = -1*(screenHeight / 2 - 250);
	var leftCorrection = -1*(screenWidth * 0.5 - 250);
	$(object).addClass('zoomed')
	.css({width:screenWidth, height:screenHeight, 
			top:topCorrection,left:leftCorrection, position:'absolute'});
	$('#show-buttons').addClass('zoomed');
	console.log('W: '+screenWidth+' H: '+screenHeight);
} 

function zoomOut() {
	$('.zoomed').removeClass('zoomed').removeAttr('style');
	$('#show-buttons').removeClass('zoomed');
}