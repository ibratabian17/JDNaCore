// ==UserScript==
// @name         Hide UI
// @namespace    JDNaCore
// @version      0.1.14
// @description  Hiding UI when beat is stopped
// @author       ibratabian17
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
    .state-dance .hud #pictos{
      border-bottom: solid 2px rgba(255, 255, 255, 0);
  box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0);
      transition: .2s all !important;
  }
      .state-dance .hud.beat #pictos{
      border-bottom: solid 2px rgba(255,255,255,0.35);
  box-shadow: 0px 4px 2px -2px rgba(0,0,0,0.25);
      transition: .2s all !important;
  }
   .state-dance .hud #racetrack, .state-dance .hud #players{
      opacity: 0!important;
      transition: .2s opacity !important;
  }
   .state-dance .hud.beat #racetrack, .state-dance .hud.beat #players{
          opacity: 1!important;
          transition: .2s opacity !important;
  }
    `
    
    var nade = document.createElement("style")
    nade.type = "text/css"
    nade.innerText = styles
    document.documentElement.appendChild(nade);