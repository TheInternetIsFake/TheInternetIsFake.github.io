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
	var hueValue=Math.random()*360;
	var saturationValue, lightnessValue;
	var stuck=true;

	$('body').keydown(
		function(event) {
			//if(stuck){hueValue=Math.random()*360;}
			stuck=false;
			/*$('body').css('background-color','hsl('+hueValue+', '+event.pageX*100/$('body').width()+'%, '+event.pageY*100/$('body').height()+'%)');
			if(event.pageY/$('body').height()<.5)
				{$('body').css('color','white');}
			else
				{$('body').css('color','black');}*/
		});

	$('body').keyup(
		function(event) {
			//if(stuck){hueValue=Math.random()*360;}
			stuck=true;
			/*$('body').css('background-color','hsl('+hueValue+', '+event.pageX*100/$('body').width()+'%, '+event.pageY*100/$('body').height()+'%)');
			if(event.pageY/$('body').height()<.5)
				{$('body').css('color','white');}
			else
				{$('body').css('color','black');}*/
		});

	$('body').scroll(
		function(event) {
			if(!stuck){hueValue=Math.random()*360;}
		})

	$('body').mousemove(
		function(event) {
			if(!stuck)
				{saturationValue=event.pageX*100/$('body').width();
				lightnessValue=event.pageY*100/$('body').height();
				$('body').css('background-color','hsl('+hueValue+', '+saturationValue+'%, '+lightnessValue+'%)');
				if(event.pageY/$('body').height()<.5)
					{$('body').css('color','white');}
				else
					{$('body').css('color','black');};
			}
		});
	var hoverable=false;

var characters = {
	count: 0,
	appear: function(menu) {
		// select a geometric char from array
		// var menu = ['•','◊','∆'];

		// select random integer from 0-2
		var dart = Math.random();
		dart = Math.floor(dart* menu.length );
		var character = menu[dart];

		var idName = 'char-' + this.count++;
		// insert at the beginning of the body element
		$('body').prepend('<span class="character" id="' + idName+ '">'  + character + '</span>');
		// style it with css?
	},
	disappear: function() {
		$('.character').hide();
	},
	move: function(destX, destY, count) {
		var whichChar = Math.floor(Math.random()*characters.count);
		$('.character').animate(
			{ top: destY, left: destX },
		  	3000
		);
	},
	// characters.newColor();
	// change the characters to a random color, using hsl values
	newColor: function(hueValue, saturationValue, lightnessValue) {
		$('.character').css('color','hsl('+hueValue+', '+saturationValue+'%, '+lightnessValue+'%)');

	},
	// characters.newSize();
	// change the character css to a random font-size between 50 and 400%
	newSize: function() {
		$('.character').css('font-size',Math.floor(Math.random()*350)+50+'%');
	}
}

characters.appear(['•','◊','∆']);

$('.character').dblclick( function(event) {
	hoverable=!hoverable;
});

$('.character').mouseenter( function(event) {
	if(hoverable)
	{
		characters.newColor(0, 100, 50);
	}
})

$('.character').mouseleave( function(event) {
	if(hoverable)
	{
		characters.newColor(0, 0, 0);
	}
})

$('body').click( function(event) {
	characters.move(event.pageX, event.pageY, characters.count);
	//characters.newColor(Math.random()*360, Math.random()*100, Math.random()*100);
	//characters.newSize();
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