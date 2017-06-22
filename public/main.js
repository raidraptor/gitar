(function() {

  var socket = io();
  var C = new Audio('C_64kb.mp3');
  var D = new Audio('D_64kb.mp3');
   var sound= new Audio('C_64kb.mp3'); 
  sound.load();
console.log(C);
 var current = {
    chord: 'C'
  };
window.addEventListener("click", onClick,false);
window.addEventListener("keydown",onKeyDown,false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
      case 68: //d
       sound = D;
      break;
      case 67: //c
	 sound =C;
	break;
 }
}
function play()
{
sound.pause();
sound.load();
sound.play();
}
function onClick()
{
console.log(current);
socket.emit('music',current);
play();
}
})();
