$(".view").hide();
$( "#ciudad" ).change(function() {
        var ciudad = $('#ciudad option:selected').val();        
        execlima(ciudad);
  });


  function execlima(city){

    let urlapi = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=c6d39f17e07c52dc913a5e83c2260c4a";
    $.ajax({
        url: urlapi,
        context: document.body
      }).done(function(result) {
        console.log(result);
        let temp = result.main.temp;
        $(".view").show();
        $(".ciudadsel").text(city).css({"text-transform":"uppercase"});
        $(".clima").text(temp)
      });

  }