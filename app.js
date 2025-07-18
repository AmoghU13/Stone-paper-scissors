let userScoredisplay=document.querySelector("#user_score")
let compScoredisplay=document.querySelector("#comp_score")
let userchoice="";
let userScore=0;
let compScore=0;
document.querySelector("#stone").onclick=function(){
    play("stone");
};
document.querySelector("#paper").onclick=function(){
    play("paper");
};
document.querySelector("#scissor").onclick=function(){
    play("scissors");
};


function play(userchoice){
    const choices=['stone','paper','scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result="";
    if(userchoice===computerChoice){
        result="its draw👍";
    }
    else if((userchoice==="stone" && computerChoice==="paper") ||
        (userchoice==="paper" && computerChoice==="scissors")||
        (userchoice==="scissors" && computerChoice==="stone")){
        result="you win!!😁";
        userScore=userScore+1;
        }
    else{
        result="comp wins😒";
        compScore=compScore+1;
    }
    document.getElementById("result").innerText=result;
    userScoredisplay.innerText="Userscore   :"+userScore;
    compScoredisplay.innerText="CompScore    :"+compScore;

}
document.querySelector("#resetBtn").onclick=function(){
    userScore=0;
    compScore=0;
    userScoredisplay.innerText="Userscore   :"+userScore;
    compScoredisplay.innerText="CompScore    :"+compScore;
    document.getElementById("result").innerText="";
};
