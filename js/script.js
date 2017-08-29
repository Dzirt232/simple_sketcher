$(document).ready(function(){
	sketcher(16);
});

function button_click(){
	$(".block").remove();
	razmer = prompt("Enter please size of new sketcher",16);
	sketcher(razmer);
};

function sketcher(razmer){
	i_max=razmer;
	j_max=razmer;
	for (var i = 0; i < i_max; i++) {
		for (var j = 0; j < j_max; j++) {
			$("#Sketcher").append("<div class='block'></div>");
		}
	};
	if (razmer == 16) {
		$(".block").height(32);
		$(".block").width(32);
	} else {
		$(".block").height(512/razmer);
		$(".block").width(512/razmer);	
	};
	$( ".block" ).on( "mouseenter", function() {
		var color = $( this ).css( "background-color" );
		var white = $("body").css("background-color");
		if (color != white) {
			var colorHex = convertToHex(color);
			$(this).css("background-color", colorHex);
		} else {
			r=Math.floor(Math.random() * (256));
			g=Math.floor(Math.random() * (256));
			b=Math.floor(Math.random() * (256));
			rgbColor = 'rgb('+r+','+g+','+b+')';
    		$( this ).css("background-color",rgbColor);
		}
  });
};

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

function convertToHex(rgb) {
rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
rgb[1] -= Math.floor(rgb[1] * 0.2);
rgb[2] -= Math.floor(rgb[2] * 0.2);
rgb[3] -= Math.floor(rgb[3] * 0.2);
return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
return isNaN(x) ? "00" : hexDigits[(x - x % 16)/ 16] + hexDigits[x % 16];
}