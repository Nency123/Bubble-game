var timer = 60;
var score = 0
var hitrn;

function increaseScore(){
   score += 10
   document.querySelector(".score").textContent = score
}
increaseScore()
function makeBubble(){
    var clutter = " "; 

    for(var i = 1;i<=152;i++){
      rn = Math.floor(Math.random()*10);
      clutter +=  `<div id="bubble">${rn}</div>`;
    }
    
    document.querySelector("#bubbleess").innerHTML = clutter;
}
makeBubble()
 
function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector(".hit").textContent = hitrn;
}
getNewHit()

function runTime(){
  var timeInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector(".time").textContent = timer;
        }
        else{
            clearInterval(timeInt)
            document.querySelector("#bubbleess").innerHTML = " ";
        }
    },1000)
}

document.querySelector("#bubbleess").addEventListener("click",function(dets){
    // console.log(dets.target.textContent)
    var clickedNum = Number(dets.target.textContent)
    if(clickedNum === hitrn){
     increaseScore()
     makeBubble()
     getNewHit()
    }
    })

runTime()

