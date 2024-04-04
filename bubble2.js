var score=0;
var Timer=60;
var rn;
function createBubble(){
    var temp="";
    for (var i=0;i<144;i++){
        temp+=`<div class="bubble"><p>${Math.floor(Math.random()*10)}</p></div>`;
    }
    document.querySelector(".body").innerHTML=temp;
}
createBubble();

function setTimer(){
    var timer=setInterval(function(){
        if (Timer>0){
            Timer--;
            document.querySelector("#box-2").textContent=Timer;
        }
        else{
            clearInterval(timer);
            document.querySelector(".body").innerHTML="";
        }
    },1000)

}
setTimer();

function getNewHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#box-1").textContent=rn;
}
getNewHit();

function increaseScore(){
    score+=10;
    document.querySelector("#box-3").textContent=score;
}
document.querySelector(".body").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    if (clickedNum == rn){
        increaseScore();
        getNewHit();
    }
});