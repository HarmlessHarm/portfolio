
$(document).ready(function(){

	$('.side').click(function(){
		if (!$(this).hasClass('zoomed')) {
			zoomIn(this);
		};
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


	// var zoomin = function(object){
	// 	console.log(object);
	// 	$(object).addClass('zoomed')
	// 	$('.container').addClass("zoomed");
	// 	if ('sid') {};
	// 	$('.side').hide();
	// 	$(object).show();
	// 	$('#show-buttons').addClass("zoomed");
	// 	$('.side.zoomed').click(function(){
	// 		console.log('zoomout');
	// 		zoomout();
	// 	});
	// }

	// var zoomout = function(){
	// 	console.log('zoom out'),
	// 	$('.container').removeClass("zoomed"),
	// 	$('.side').removeClass("zoomed").delay(1000),
	// 	$('#show-buttons').removeClass("zoomed"),
	// 	$('.side').show('fast');
	// 	$('.side').click(function(){
	// 		if (!$(this).hasClass('zoomed')) {
	// 			zoomin(this);
	// 		};
	// 	});
	// }
	

	// $(window).keypress(function(e) {
 //  		if (e.keyCode == 32) {
 //    		zoomout();		
 //  		}
	// });
// var shown;

// 	$('button.animate').click(function(show-side){
// 		if (($'#cube').hasClass('show-front') && $(this).hasClass('show-front')) {

// 		};
// 	});

// var zoomOut = function({

// });


// $(document).ready(function(){
// 	$('.side').click(function(){
// 		console.log('has zoomed'),
// 		$('.container').removeClass("zoomed"),
// 		$(this).removeClass("zoomed"),
// 		$('#show-buttons').removeClass("zoomed"),
// 		$('.side').show();
// 	});	
// })