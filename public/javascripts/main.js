//@codekit-prepend '/libs/gumby.min.js'


//Gumby is ready to go
Gumby.ready(function() {

    // placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("This is an oldie browser...");
});

// Touch devices loaded
Gumby.touch(function() {
	//console.log("This is a touch enabled device...");
});



// Document ready
$(function() {

});











