/*$( document ).ready(function() {

	$('h3').hover(
	  function() {
	    $('h3').css('background-color', '#00FFFF');
	  }
	);

});*/


$( document ).ready(function() {

// 
// if user hovers on 'hue' button
// hue of page changes to new random value
// proportion = get random number between 0 and 1 - Math.random()
// hueValue = multiply proportion by 360 

	$('body').click(
		function(event) {
			$('body').css('background-color','hsl('+Math.random()*360+', '+event.pageX*100/$('body').width()+'%, '+event.pageY*100/$('body').height()+'%)')
		});
// saturationValue = horizontal position*100/width
// 
// lightnessValue = vertical position*100/height
// 
// plug in three values to css using string concatenation: +
// change css rule for body with jquery
// 
// vertical position measures lightness
	// if lightness is less than 50
	////if (  ) {
	// change all typeface to white
	////}
	// if lightness is more than 50
	////if (   ) {
	// change all typeface to black
	////}
// 

});
/*
$( document ).ready(function() {

	var yPosition, screenHeight, 
		saturationRatio, saturationValue, 
		cssValue, brightnessValue, hueValue;

		// initialize brightness value
		brightnessValue = 50;

	$('body').click(
		function(event) {
			// get y value of click
			yPosition = event.pageY;

			// get height of body element (screen)
			screenHeight = $('body').height();

			// divide yposition by height to get relative amount
			saturationRatio = yPosition/screenHeight;

			// multiple that by 100 to get saturation value
			saturationValue = saturationRatio*100;

			// if the cursor is on the top half of the screen
			if ( saturationValue > 50 ) {
			// increase the brightness by 5%
				brightnessValue = brightnessValue + 5;
			}

			// if the cursor is on the bottom half of the screen
			if ( saturationValue < 50 ) {
			// decrease the brightness by 5%
				brightnessValue = brightnessValue - 5;
			}

			hueValue = Math.random() * 360;

			// embed saturation value in css rule
			cssValue = 'hsl('+hueValue+', '+saturationValue+'%, '+ (brightnessValue)%100 +'%)';

			// change the css value to color w new saturation.
			$('body').css('background-color', cssValue);

		}
	);
});

var cost = "5";
var bool = 5===5;

if (bool) {
  alert('of course');
} else {
  alert('pigs can fly');
}

var index = 0;
while (index < 5) {
  alert('dang it #'+index);
  index = index + 1;
}
*/