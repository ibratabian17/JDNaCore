// ==UserScript==
// @name         JDNaCore All In One
// @namespace    JDNaCore
// @version      0.1.17
// @description  All JDNaCore Script In One
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==
console.log("JDNaCore - Created By Ibratabian17")

//HideUI
function HideUI(){
  document.querySelector('.js').classList.add("anucore-hui");
    setInterval(function(){
        var checkTutorialClass = $(".js").hasClass("state-tutorial");
        if(checkTutorialClass ){
         const el = document.querySelector('.hud');
          if (el.classList.contains("beat")) {
            el.classList.remove("beat");
          }
            }
        }, 500);//run this thang every .5 seconds
        
        var hideui1 = `
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
        nade.innerText = hideui1
        document.documentElement.appendChild(nade);
}

//PictosColor
function PictoBeatColor(){
  document.querySelector('.js').classList.add("anucore-pbc");
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

//Racetrack+
{
function TrashColor(){
  const hud = document.querySelector(arguments[0]);
  if (arguments[1] == 'blue'){
  hud.classList.remove("red", "green", "purple", "aqua", "pink");
  } else if (arguments[1] == 'red'){
  hud.classList.remove("blue", "green", "purple", "aqua", "pink");
  } else if (arguments[1] == 'green'){
  hud.classList.remove("blue", "red", "purple", "aqua", "pink");
  } else if (arguments[1] == 'purple'){
  hud.classList.remove("blue", "red", "green", "aqua", "pink");
  } else if (arguments[1] == 'aqua'){
  hud.classList.remove("blue", "red", "green", "purple", "pink");
  } else if (arguments[1] == 'pink'){
  hud.classList.remove("blue", "red", "green", "purple", "aqua");
  }
}
function PatchColor(){
  var rpc = $(arguments[0])
  var rcpc = document.querySelector(arguments[0]).style.backgroundColor;
  var rpcc = $(arguments[0]).attr('class').split(' ')[2];
  //blue
  if(rcpc == "rgb(55, 132, 249)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("blue");
          TrashColor(arguments[0], 'blue');
  }
  //red
  if(rcpc == "rgb(236, 36, 67)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("red");
          TrashColor(arguments[0], 'red');
 }
  //green
  if(rcpc == "rgb(125, 228, 0)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("green");
    TrashColor(arguments[0], 'green');
  }
 //purple
  if(rcpc == "rgb(136, 2, 201)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("purple");
    TrashColor(arguments[0], 'purple');
 }
 //aqua
    if(rcpc == "rgb(3, 222, 214)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("aqua");
      TrashColor(arguments[0], 'aqua');
  }
 //pink
  if(rcpc == "rgb(216, 32, 201)"){
          const hud = document.querySelector(arguments[0]);
          hud.classList.add("pink");
    TrashColor(arguments[0], 'pink');
 }
}
function ApplyRTColor(){
setInterval(function(){
var IsDance = $(".js").hasClass("state-dance");
if(IsDance){
  PatchColor('#racetrack-fill-p1')
  PatchColor('#racetrack-fill-p2')
  PatchColor('#racetrack-fill-p3')
  PatchColor('#racetrack-fill-p4')
}
    }, 500);//run this thang every .4 seconds
}
}
function RCTrackPlus(){
  document.querySelector('.js').classList.add("anucore-rc+");
  ApplyRTColor()
}

//Hud Costumizer
function HudPlus(){
  document.querySelector('.js').classList.add("anucore-hud+");
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
      //OddOrEven
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
      //LyricHider
 const line = document.getElementsByClassName('line');
if(!line.length > 0)
{
  const lyrics = document.querySelector('#lyrics');
  lyrics.style.opacity = '0';
}
          }
    }, 1);//run this thang every 1 miliseconds
   
  }

//StopMyPreview!
function StopMyPreview(){
      setInterval(function(){
        if($(".js").hasClass("state-tutorial") || $(".js").hasClass("state-dance") || $(".js").hasClass("state-afterdance")){
            var myPlayer = document.querySelector(".video-preview__video");
            myPlayer.pause();
          }
        }, 500);
}

//Run Patcher
{ console.log("Starting JDNaCore")
try {
HideUI()
PictoBeatColor()
RCTrackPlus()
HudPlus()
StopMyPreview()
  console.log("Done! ~JDNaCore")
}
catch(err) {
  console.log("Error: " + err)
  alert('JDNaCore Failed To Start!')
} }