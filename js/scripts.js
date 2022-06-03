$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const inputSport = parseInt($("input:radio[name=sport]:checked").val());
    const inputSeason = parseInt($("input:radio[name=season]:checked").val());
    const inputTacos = parseInt($("input:radio[name=tacos]:checked").val());
    const inputDessert = parseInt($("#dessert").val());
    const inputAnimals = parseInt($("#wouldRather").val());

    if (inputSport === 1 && inputDessert >=1 && inputSeason >=1 && inputAnimals >=1  ) {
      $('#cSharp').show();
      $('form#quiz').hide();
    }
     else if (inputSport === 2 && inputDessert >=1 && inputSeason >=1 && inputAnimals >=1)  {
      $('#javaScript').show();
      $('form#quiz').hide();

    } else if (inputSport === 3 && inputDessert === 1 && inputSeason >=1 && inputAnimals >=1) {
      $('#react').show();
      $('form#quiz').hide();
    } 
  });
});