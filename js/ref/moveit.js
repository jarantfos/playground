
function moveIt(){
  var coords = new Array(10,50,100,130,175,225,260,300,320,350);
  //create a var coords and make it an instance of the Array object
  var x = coords[Math.floor((Math.random()*10))];
  var y = coords[Math.floor((Math.random()*10))];
  //pull a random value from the coords variable.
  //Math.random returns a number between 0 and 1, *10 turns it into a number from 0 and 10, and Math.floor turns the number into an integer
  $("#movingText").css({"top": y + "px", "left": x + "px"})
}
