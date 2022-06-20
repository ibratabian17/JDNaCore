// ==UserScript==
// @name         Just Dance Now Hud+
// @namespace    JDNAnuCore
// @version      0.0.1
// @description  Add make '.hud' element more cool
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==


function HudPlus(){
    //PB Start
    var odon = false;
    var prefbeatdur;
    var beatdur;
    
    setInterval(function(){
      var IsTutorial = $(".js").hasClass("state-tutorial");
      if(IsTutorial ){
        odon = false;
          const hud = document.querySelector('.hud');
          hud.classList.add("odd");
          hud.classList.remove("even");
      }
      var checkExistClass = $(".js").hasClass("state-dance");
      if(checkExistClass ){
        
      fixedbeat = $('#beat')
      beatdur = fixedbeat.css('animation-duration')
      const root = document.querySelector(":root"); //grabbing the root element
      if (beatdur !== prefbeatdur){
        if(odon ){
          odon = false;
          const hud = document.querySelector('.hud');
          hud.classList.add("odd");
          hud.classList.remove("even");
        } else {
          odon = true;
          const hud = document.querySelector('.hud');
          hud.classList.add("even");
          hud.classList.remove("odd");
        }
      }
      prefbeatdur = fixedbeat.css('animation-duration');
            }
      }, 1);//run this thang every 1 miliseconds
    }
    
    HudPlus()