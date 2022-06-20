// ==UserScript==
// @name         PictoBeatColor
// @namespace    JDNaCore
// @version      0.1.13
// @description  Get A Lyric Color and place it on the variable
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==

  //PB Start
  setInterval(function(){
    var checkExistClass = $(".js").hasClass("state-dance");
    if(checkExistClass ){
    var top_bar = $('.fill')
    var beat = $('#beat')
    var bg = top_bar.css('background-color')
    var bga = beat.css('background-color')
    var color = top_bar.css('color')
    beat.siblings().css({
      backgroundColor: bg,
      color: color
    })
    if(typeof color !== 'undefined'){
    if(bga != color){
      const root = document.querySelector(":root"); //grabbing the root element
    root.style.setProperty("--pictobeat-color", color);
    }
    }
        }
    }, 500);//run this thang every .5 seconds
