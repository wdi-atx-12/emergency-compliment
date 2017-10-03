

  let colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  };


  let randomIndex = randomInt(colors.length);
  $('body').css('background-color', colors[randomIndex]);
  

