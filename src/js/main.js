"use strict";



var btn = document.querySelector(".nav__toggle"),
    nav = document.querySelector(".nav");

nav.classList.remove("nav--nojs");
btn.addEventListener("click", function(event){
  event.preventDefault();
  if(nav.classList.contains("nav--closed")){
    nav.classList.remove("nav--closed");
    nav.classList.add("nav--opened");
  } else {
    nav.classList.remove("nav--opened");
    nav.classList.add("nav--closed");
  }
});



var btnPop = document.querySelector(".btn--popup"),
    popUp = document.querySelector(".popup");

btnPop.addEventListener("click", function(event){
  event.preventDefault();
  popUp.classList.toggle("popup--opened");
});

window.addEventListener("keydown", function(event){
  if(event.keyCode == 27){
    if(popUp.classList.contains("popup--opened")){
      popUp.classList.remove("popup--opened");
    }
  }
});



function initMap(){
  var map = new google.maps.Map(document.getElementById("map"),{
    center: {lat: 34.868220, lng: -111.893297},
    scrollwheel: false,
    zoom: 10,
    mapTypeControl: false
  })

  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(34.828220, -111.773297);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
