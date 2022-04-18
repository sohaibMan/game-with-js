'use strict';





const scoreel=document.querySelectorAll(".score") ;


const player=document.querySelectorAll(".player") ;
const dice=document.querySelector(".dice");
let currentScore=[0,0];
let score=[0,0];

//test


const currentScoreel=document.querySelectorAll(".current-score") ;
// console.log(currentScore[1].textContent);

//t=0
function swithplay(){
    for (let index = 0; index < 2; index++) {
     
        player[index].classList.toggle("player--active");
     
    }
}


///generate random dice roling




const BtnRoll=document.querySelector(".btn--roll");
BtnRoll.addEventListener("click",function(){

    let dicenumber=Math.floor(Math.random()*6)+1;
    dice.src=`dice-${dicenumber}.png`;
    dice.classList.remove("hidden");  

if(dicenumber!=1){
  
  
    for (let index = 0; index < 2; index++) {
      
       if(player[index].classList.contains("player--active")){
           currentScore[index]+=dicenumber;
           currentScoreel[index].textContent =currentScore[index];
       }
        
    }



}
else {
    //swith to next player

     for (let index = 0; index < 2; index++) {
     
        if(player[index].classList.contains("player--active")){
            currentScoreel[index].textContent =currentScore[index]=0;
        }
         
     }
    swithplay();
}

}
)


const BtnHold=document.querySelector(".btn--hold");
BtnHold.addEventListener("click",function(){


   
   
   
     

 
    


    for (let index = 0; index < 2; index++) {
     
        if(player[index].classList.contains("player--active")){
            score[index]+=currentScore[index];
scoreel[index].textContent=score[index];
currentScore[index]=0;
        }
        if(score[index]>=100){
 player[index].classList.add("player--winner");
 //working here
BtnHold.classList.remove("btn--hold");
BtnRoll.classList.remove("btn--roll");



        }
         
     }
     swithplay();
     for (let index = 0; index < 2; index++) {
     
        if(player[index].classList.contains("player--active")){
            currentScoreel[index].textContent =currentScore[index]=0;
        }
         
     }

});


const  btnNew=document.querySelector(".btn--new")
btnNew.addEventListener("click",function(){

 dice.classList.add("hidden");  
 currentScore=[0,0];
score=[0,0];
player[0].classList.add("player--active");
player[1].classList.remove("player--active");

BtnHold.classList.add("btn--hold");
BtnRoll.classList.add("btn--roll");

for (let index = 0; index < 2.; index++) {
    currentScoreel[index].textContent =0;
    scoreel[index].textContent =0;
    player[index].classList.remove("player--winner");
}


})



// 





