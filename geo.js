var api = "https://fcc-weather-api.glitch.me/api/current?";
var lon;
var lat;

$("document").ready(function(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      lat = "lat=" + position.coords.latitude;
      lon = "lon=" + position.coords.longitude;
      getWeather(lat,lon);



    });
  }


});

function getWeather(lat,lon){

  $.ajax({
    type:'GET',
    url: api + lat + "&" + lon,
    success : function(data){
      console.log(data);
     $("#city").html(data.name + ",");
     $("#country").html(data.sys.country);
     $("#temp").html(data.main.temp + " &deg;"  + "C" );
     $("#weather").html(data.weather[0].main)


    }
     

  });
}