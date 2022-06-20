// ==UserScript==
// @name         Just Dance Now RT+
// @namespace    JDNAnuCore
// @version      0.0.1
// @description  Allow userstyles to modify racetrack for advanced
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==

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

GetRTColor()