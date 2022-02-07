// ==UserScript==
// @name         Unhud-Beat
// @namespace    https://github.com/ibratabian17/JDNaCore
// @version      0.1.12
// @description  Add Transition In When Playing JDN!
// @author       You
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==

setInterval(function(){
    var checkTutorialClass = $(".js").hasClass("state-tutorial");
    if(checkTutorialClass ){
     const el = document.querySelector('.hud');
      if (el.classList.contains("beat")) {
        el.classList.remove("beat");
      }
        }
    }, 500);//run this thang every .5 seconds
    
    var styles = `
    .state-dance .hud #pictos, .state-dance .hud #racetrack, .state-dance .hud #players{
        opacity: 0!important;
        transition: .2s opacity !important;
    }
    .state-dance .hud.beat #pictos, .state-dance .hud.beat #racetrack, .state-dance .hud.beat #players{
            opacity: 1!important;
            transition: .2s opacity !important;
    }
    `
    
    var nade = document.createElement("style")
    nade.type = "text/css"
    nade.innerText = styles
    document.documentElement.appendChild(nade);