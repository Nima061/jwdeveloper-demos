/*! feeds-js-example 15-06-2016 */
var jsWidget=function(a,b,c,d,e){function f(a,f,h,i,j){function k(a){b.ajax({type:"GET",url:[g,"feeds",a+".json"].join("/"),processData:!1,dataType:"json",success:l,error:function(a){console.log("Error downloading feed")},fail:function(a){console.log("Error downloading feed")}})}function l(c){d(a).setup(c),d(a).on("playlistItem",function(a){b.ajax({type:"GET",url:n(a.item.mediaid),processData:!1,dataType:"json",success:p,error:function(a){console.log("Error downloading feed")},fail:function(a){console.log("Error downloading feed")}})})}function m(a){if(""===a)return a;var b=Math.floor(a/3600);a%=3600;var c=Math.floor(a/60);a%=60;var d=b?b+":":"",e=b&&10>c?"0"+c:c,f=10>a?"0"+a:a;return d+e+":"+f}function n(a){return[g,"feed.json?"+o({feed_id:j,related_video:a})].join("/")}function o(a){return c.reduce(a,function(a,b,c){return a.push(c+"="+encodeURIComponent(b)),a},[]).join("&")}function p(g){b("#"+h).html(g.title),parent=b("#"+f),parent.empty(),0===c.size(g.playlist)?q(e["templates/error.hbs"],{},parent):c.each(g.playlist,function(c,f){var g="item"+f,h={id:g,title:c.title,desc:c.description,dur:m(c.sources[0].duration||""),image:c.image};q(e["templates/item.hbs"],h,parent),b("#"+g).click(function(){d(a).load(c)})})}function q(a,b,c){var d=a(b);c.append(d)}k(i)}var g="//content.jwplatform.com";return{setup:f}}(window,$,_,window.jwplayer,JST);