$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const inputSport = parseInt($("input:radio[name=sport]:checked").val());
    const inputSeason = parseInt($("input:radio[name=season]:checked").val());
    const inputTacos = parseInt($("input:radio[name=tacos]:checked").val());
    const inputAge = parseInt($("#age").val());
    const beverage = $("#beverage").val();

    if (inputColor === 1 && inputAge <= 3) {
      $('#cSharp').show();
      $('form#quiz').hide();
    } else if (inputColor === 2 && inputAge >= 1)  {
      $('#msPiggy').show();
      $('form#quiz').hide();
    } else if (inputColor === 3 && inputAge <= 2) {
      $('#animal').show();
      $('form#quiz').hide();
    } if (inputColor === 3 && inputAge === 3) {
      $('#sorry').show();
      $('form#quiz').hide();
    }
  });
});