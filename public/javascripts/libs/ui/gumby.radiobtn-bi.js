/**
* Gumby RadioBtn
*/!function(){"use strict";function e(e){this.$el=e;var t=this;this.$el.on(Gumby.click,function(e){t.click(e)}).on("gumby.check",function(){t.update()});t.$el.hasClass("checked")&&t.update()}e.prototype.click=function(e){var t=$(e.target);e.stopPropagation();e.preventDefault();this.update()};e.prototype.update=function(){var e=this.$el.find("input[type=radio]"),t=this.$el.find("span"),n='input[name="'+e.attr("name")+'"]';$(".radio").has(n).removeClass("checked").find("input").prop("checked",!1).end().find("i").remove();e.prop("checked",!0);t.append('<i class="icon-dot" />');this.$el.addClass("checked").trigger("gumby.onChange")};Gumby.addInitalisation("radiobtns",function(){$(".radio").each(function(){var t=$(this);if(t.data("isRadioBtn"))return!0;t.data("isRadioBtn",!0);new e(t)})});Gumby.UIModule({module:"radiobtn",events:["onChange","check"],init:function(){Gumby.initialize("radiobtns")}})}();