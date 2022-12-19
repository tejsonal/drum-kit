//detecting button press
var numberOfButtons = document.querySelectorAll(".drum").length ;
for(var i=0; i<numberOfButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

var buttonInnerHtml = this.innerHTML ;//this-->button which triggle addEventListener
//this.innerHTML-->button's innerhtml(w) is stored inside variable
makeSound(buttonInnerHtml);//check the innerHTML of button
buttonAnimation(buttonInnerHtml);
});
}
//decting keyboard press
document.addEventListener("keypress" ,function(event){
makeSound(event.key);//event tells the event which triggeres EventListener and it has
//various properties one of them is key
//key-->it tells which key is pressed on keyboard
buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a":
      var tom2 = new Audio("sounds/tom-3.mp3");
      tom2.play();
   break;
   case "s":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
  break;
  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  break;
  case "j":
    var tom5 = new Audio("sounds/crash.mp3");
    tom5.play();
  break;
  case "k":
    var tom6 = new Audio("sounds/snare.mp3");
    tom6.play();
  break;
  case "l":
    var tom7 = new Audio("sounds/kick-bass.mp3");
    tom7.play();
  break;
    default:console.log(buttonInnerHtml);
  }
}
function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);//-->concatnating the fullstop to select class of the key
  //assigning it with variable
  activeButton.classList.add("pressed");
  //adding pressed class to button class
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
  //call this function after milliseconds to remove shadow after it got pressed
}
