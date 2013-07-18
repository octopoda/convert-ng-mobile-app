/**
* Gumby Init
*/// test for touch event support
Modernizr.load({test:Modernizr.touch,yep:Gumby.path+"/jquery.mobile.custom.min.js",callback:function(e,t,n){$.mobile&&(window.Gumby.click="tap")},complete:function(){window.Gumby.init();typeof define=="function"&&define.amd&&define(window.Gumby)}});