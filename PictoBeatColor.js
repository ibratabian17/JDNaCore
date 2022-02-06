// ==UserScript==
// @name         PictoBar
// @namespace    http://tampermonkey.net/
// @version      0.2.21
// @description  Enable PictoBar Color Using Lyric Color
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==
console.log("Running PB..")

setInterval(function(){
var checkExistClass = $(".js").hasClass("state-dance");
if(checkExistClass ){
var top_bar = $('.fill')
var beat = $('#beat')
var bg = top_bar.css('background-color')
var bga = top_bar.css('background-color')
var color = top_bar.css('color')
beat.siblings().css({
  backgroundColor: bg,
  color: color
})
if(bga != color){
document.getElementById("beat").style.backgroundColor = color;
}
    }
}, 500);
//run this patch every .5 miliseconds