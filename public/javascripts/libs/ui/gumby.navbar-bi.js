/**
* Gumby Navbar
*/!function(){"use strict";function e(e){this.$el=e;var t=this;this.$el.find("li").on(Gumby.click,function(e){var n=$(this);e.stopPropagation();this.href==="#"&&e.preventDefault();t.dropdown(n)})}if(!Modernizr.touch)return;e.prototype.dropdown=function(e){e.children(".dropdown").length?e.hasClass("active")?e.removeClass("active"):e.addClass("active"):this.$items.removeClass("active")};Gumby.addInitalisation("navbars",function(){$(".navbar").each(function(){var t=$(this);if(t.data("isNavbar"))return!0;t.data("isNavbar",!0);new e(t)})});Gumby.UIModule({module:"navbar",events:[],init:function(){Gumby.initialize("navbars")}})}();