define(function(){

  this["JST"] = this["JST"] || {};

  this["JST"]["common/layouts/empty-layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="main-region"></div>';}return __p};

  this["JST"]["common/layouts/master-layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="header-region" class="row"></div>\n\n<div id="content-wrapper" class="row">\n\t<div id="sidebar-region" class="col-md-3"></div>\n\t<div id="main-region" class="col-md-8"></div>\n</div>\n<div id="footer-region" class="row"></div>\n\n';}return __p};

  this["JST"]["common/page-regions/footer"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="footera">\n\t<a href="#" class="logo"></a>\n\t<ul class="fr">\n\t\t<li class="item fr">\n\t\t<a href="#works">WORKS</a>\n\t\t</li>\n\t\t<li class="item fr">\n\t\t\t<a href="#joinus">JOIN US</a>\n\t\t</li>\n\t\t<li class="item fr">\n\t\t\t<a href="#contactus">CONTACT US</a>\n\t\t</li>\n\t\t<li class="item fr">\n\t\t\t<a href="javascript:void(0);" style="color:gray;">CHINESE</a>\n\t\t</li>\n\t</ul>\n</div>';}return __p};

  this["JST"]["common/page-regions/header"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="logo">\n\t<a href="#"></a>\n</div>\n<ul class="menu">\n\t<li class="works fl">\n\t\t<a href="#works">WORKS</a>\n\t</li>\n\t<li class="joinus fl">\n\t\t<a href="#joinus">JOIN US</a>\n\t</li>\n\n\t\n\t<li class="chinese fr" style="text-align: right;">\n\t\t<a href="javascript:void(0);" style="color:#ddd;">CHINESE</a>\n\t</li>\n\t<li class="contactus fr" style="text-align: right;">\n\t\t<a href="#contactus">CONTACT US</a>\n\t</li>\n\t\n</ul>\n\n';}return __p};

  this["JST"]["common/page-regions/sidebar"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<li>\n\t<h4>Sidebar Menu Header</h4>\n</li>\n<li class="divider"></li>\n<li>\n\t<a href="/">Lorem ipsum dolor sit amet.</a>\n</li>\n<li>\n\t<a href="/">Lorem ipsum dolor sit amet.</a>\n</li>\n<li>\n\t<a href="/">Lorem ipsum dolor sit amet.</a>\n</li>\n<li>\n\t<a href="/">Lorem ipsum dolor sit amet.</a>\n</li>\n<li>\n\t<a href="/">Lorem ipsum dolor sit amet.</a>\n</li>\n<li>\n\t<a href="/">Lorem ipsum dolor sit amet.</a>\n</li>';}return __p};

  return this["JST"];

});