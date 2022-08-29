// ==UserScript==
// @name         Just Dance Now RT+
// @namespace    JDNAnuCore
// @version      0.1.17
// @description  Allow userstyles to modify racetrack for advanced
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==

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
          document.querySelector('.js').classList.add("anucore-rc+");
          ApplyRTColor()
        