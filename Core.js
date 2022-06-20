// ==UserScript==
// @name         JDNaCore All In One
// @namespace    JDNaCore
// @version      0.1.13
// @description  All JDNaCore Script In One
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==
console.log("Starting JDNaCore")

function HideUI(){
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
}

function PictoBeatColor(){
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
}
function PatchColor(){
  var rpc = $(arguments[0])
  var rcpc = rpc.css('background-color')
  //blue
  if(rcpc == "rgb(55, 132, 249)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("blue");
  }
  //red
  if(rcpc == "rgb(236, 36, 67)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("red");
 }
  //green
  if(rcpc == "rgb(125, 228, 0)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("green");
  }
 //purple
  if(rcpc == "rgb(136, 2, 201)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("purple");
 }
 //aqua
    if(rcpc == "rgb(3, 222, 214)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("aqua");
  }
 //pink
  if(rcpc == "rgb(216, 32, 201)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("pink");
 }
}

function GetRTColor(){
setInterval(function(){
var IsDance = $(".js").hasClass("state-dance");
if(IsDance){
  PatchColor('#racetrack-fill-p1')
  PatchColor('#racetrack-fill-p2')
  PatchColor('#racetrack-fill-p3')
  PatchColor('#racetrack-fill-p4')
}
    }, 500);//run this thang every .5 seconds
}

console.log("Running Patch")
try {
HideUI()
PictoBeatColor()
GetRTColor()
}
catch(err) {
  //ignore error
}