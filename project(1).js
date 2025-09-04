let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow","gray","pink","purple"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
if(started == false){
    console.log("game is started");
    started = true;
    levelUp();
}
});
function gameFlash (btn){
btn.classList.add("flash");
setTimeout(function (){
    btn.classList.remove("flash");
},250);
}
function userFlash (btn){
btn.classList.add("userFlash");
setTimeout(function (){
    btn.classList.remove("userFlash");
},250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
   
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
 gameFlash(randBtn);
};
function checkAns (idx){
   // console.log("curr level : ", level );
   if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
    }
   }else{
    h2.innerHTML = `Game Over! your score was <b>${level}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function (){
    document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
   }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
};
function reset (){
started = false;
gameSeq = [];
userSeq = [];
level = 0;
}