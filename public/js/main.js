$(function() {
    console.log( "ready!" );
    setBackgroundColor();
});

function setBackgroundColor(){
  colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  randcolor = colors[Math.floor(Math.random()*colors.length)];
  $("body").css("background-color", randcolor);
}
