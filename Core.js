// ==UserScript==
// @name         Just Dance Now Anu Core
// @namespace    JDNAnuCore
// @version      0.0.1
// @description  Just Dance Now Anu Core
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==
console.log("Running Patcher..")

function PictoBar(){
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
  if(bga != color){
  console.log("Running PictoBar Patcher.." + color)
  document.getElementById("beat").style.backgroundColor = color;
  }
      }
  }, 500);//run this thang every .5 seconds
}

function UnHudBeat(){
  //UnHud-Beat
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
  }

  console.log("Running PictoBar Patcher..")
  PictoBar()
  console.log("Running UnHudBeat Patcher..")
  UnHudBeat()
