// ==UserScript==
// @name         StopMyPreview
// @namespace    JDNAnuCore
// @version      0.1.17
// @description  Fix the JDN Bug where it would start a preview when changing room master
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==

setInterval(function(){
    if($(".js").hasClass("state-tutorial") || $(".js").hasClass("state-dance") || $(".js").hasClass("state-afterdance")){
        var myPlayer = document.querySelector(".video-preview__video");
        myPlayer.pause();
      }
    }, 500);