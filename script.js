var screen = document.querySelectorAll(".screen");
var btn = document.querySelector("button");
var allelem = document.querySelectorAll(".elem");
var playGround = document.querySelector(".playground");
var selected = " ";
var scoreSpan = document.querySelector(".score span");
var timeSpan = document.querySelector(".Time span");
var gameover = document.querySelector(".gameover");
var result = document.querySelector("#result");

var min = 0;
var sec = 0;


score =0;

btn.addEventListener("click",() =>{
   setTimeout(function(){
      screen[1].style.transform = "translateY(-100%)";
   },1000)
   btn.style.cursor= "grabing";
})

btn.addEventListener("mouseenter",()=>{
   btn.style.backgroundColor = "beige";

})

allelem.forEach(function(dents){dents.addEventListener("click",function(){

   screen[2].style.transform = "translateY(-200%)";
   // console.log(dua);
   // console.log(dents.childNodes[1].src);
   selected = dents.childNodes[3].src
   console.log(dents.childNodes[3])

   
   createImage();
   increaseTime();


})})

function createImage(){
   var newImg = document.createElement("img")

   newImg.setAttribute("src",selected)

   var x = Math.floor(Math.random()*100)
   var y = Math.floor((Math.random()*100))
   var rot = Math.floor(Math.random()*360)


   newImg.style.left = x+"%";
   newImg.style.top = y+"%";
   newImg.style.rotate = rot+"deg";

   newImg.addEventListener("click",catchImage);
   playGround.appendChild(newImg);
   
    
  
}


function catchImage(){
  increaseScore();
   this.style.opacity = 0;
   setTimeout(function(){
      this.style = 1;
   },2000);
   addImages();
}

function addImages(){
   setTimeout(createImage,1000);
   setTimeout(createImage,1500);
}

function increaseScore(){
   score++;
   scoreSpan.innerHTML = score;
   
}

function increaseTime(){
  var x = setInterval(function(){
   sec++;
   if(sec<20){
   timeSpan.innerHTML=`00:${sec}`;
   }
   else{
   timeSpan.innerHTML=`0:${sec}`;
   sec =0;
   gameover.style.display = "block";
   clearInterval(x);
   setTimeout(function(){
   screen[3].style.transform = "translateY(-300%)";
    displayresult();
   },2000)
  
   }
   },1000)
}

function displayresult(){
result.innerHTML = `YOU SCORED : ${score}`;

}