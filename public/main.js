(function() {

  var socket = io();
  var C = new Audio('C_64kb.mp3');
  var D = new Audio('D_64kb.mp3');
var chord='C';

 var current = {
    chord: 'C'
  };
window.addEventListener("click", onClick,false);
window.addEventListener("keydown",onKeyDown,false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
 console.log(keyCode);
  switch (keyCode) {
      case 68: //d
       chord = 'D';
      break;
      case 67: //c
	 chord ='C';
	break;
 }
}
function play()
{
switch(chord){
case 'C':
C.pause();
D.pause();
C.load();
C.play();
break;
case 'D':
C.pause();
D.pause();
D.load();
D.play();
break;
}
}
function onClick()
{
console.log(chord);
socket.emit('music',current);
play();
}
})();
