!function(){return function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){return o(e[i][1][r]||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}}()({1:[function(require,module,exports){"use strict";require("./modules/the-article"),require("./modules/mobile-header"),require("./modules/tipos-moviles"),require("./modules/babel"),require("./modules/special-carousel"),require("./modules/carousel"),require("./modules/bienes-comunes"),require("./modules/plebiscito")},{"./modules/babel":2,"./modules/bienes-comunes":3,"./modules/carousel":4,"./modules/mobile-header":5,"./modules/plebiscito":6,"./modules/special-carousel":7,"./modules/the-article":8,"./modules/tipos-moviles":9}],2:[function(require,module,exports){"use strict";var $slide=$(".js-babel-slide");$slide.length&&$slide.slick({arrows:!1,dots:!0});var $button=$(".js-toggle-babel-menu"),$html=$("html");$button.on("click",function(event){event.preventDefault(),$html.toggleClass("has-babel-menu-showed")})},{}],3:[function(require,module,exports){"use strict";var $bienesComunesCarousel=$(".js-carousel");$bienesComunesCarousel.length&&$bienesComunesCarousel.owlCarousel({loop:!0,items:1,dots:!0,nav:!1,center:!0,autoWidth:!0,margin:10})},{}],4:[function(require,module,exports){"use strict";var $carousel=$(".js-home-carousel");$carousel.length&&$carousel.owlCarousel({loop:!0,margin:30,nav:!1,dots:!1,responsive:{0:{items:1,margin:0},420:{items:2,margin:15},600:{items:3,margin:20},1000:{items:4}}})},{}],5:[function(require,module,exports){"use strict";var $button=$(".js-toggle-mobile-menu"),$html=$("html"),$mobileMenuLi=$(".mobile-navigation__menu").find("> li");$button.on("click",function(event){event.preventDefault(),$html.hasClass("has-mobile-menu-showed")?$html.removeClass("has-mobile-menu-showed"):$html.addClass("has-mobile-menu-showed")}),$.each($mobileMenuLi,function(index,element){var $this=$(this);!!$this.find("> ul").length&&($this.addClass("has-submenu"),$this.append('<span class="toggle-submenu"></span>'))}),$(document).on("click",".toggle-submenu",function(event){event.preventDefault();var $parent=$(this).parents(".has-submenu"),$ul=$parent.find("> ul");if($parent.hasClass("has-submenu-showed"))$ul.slideUp(),$parent.removeClass("has-submenu-showed");else{var $submenu=$(".has-submenu.has-submenu-showed");$submenu.find("> ul").slideUp(),$submenu.removeClass("has-submenu-showed"),$ul.slideDown(),$parent.addClass("has-submenu-showed")}})},{}],6:[function(require,module,exports){"use strict";var $carousel=$(".js-plebiscito-carousel");$carousel.length&&$carousel.owlCarousel({loop:!0,dots:!1,nav:!0,margin:25,responsive:{0:{items:1},600:{items:2},1000:{items:3}}})},{}],7:[function(require,module,exports){"use strict";var $carousel=$(".js-special-carousel");$carousel.length&&$carousel.owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,items:1})},{}],8:[function(require,module,exports){"use strict";$(document).on("click",".js-show-comments",function(event){event.preventDefault(),$(this).parents(".the-comments").find(".the-comments__body").show()})},{}],9:[function(require,module,exports){"use strict";var $openButton=$(".js-open-tipos-moviles-menu"),$closeButton=$(".js-close-tipos-moviles-menu"),$html=$("html");$openButton.on("click",function(event){event.preventDefault(),$html.addClass("has-tipos-moviles-menu-showed")}),$closeButton.on("click",function(event){event.preventDefault(),$html.removeClass("has-tipos-moviles-menu-showed")})},{}]},{},[1]);