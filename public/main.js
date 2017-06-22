(function() {

  var socket = io();
  var C = new Audio('C_64kb.mp3');
  C.load();
console.log(C);
 var current = {
    chord: 'C'
  };
window.addEventListener("click", onClick,false);

function play()
{
C.pause();
C.load();
C.play();
}
function onClick()
{
console.log(current);
socket.emit('music',current);
play();
}
})();
