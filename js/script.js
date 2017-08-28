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
		r=Math.floor(Math.random() * (256));
		g=Math.floor(Math.random() * (256));
		b=Math.floor(Math.random() * (256));
		rgbColor = 'rgb('+r+','+g+','+b+')';
    $( this ).css("background-color",rgbColor);
  });
};


