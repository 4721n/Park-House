
function initMap() {
    var stylers = [
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#111419"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ecf0f4"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "lightness": "-4"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#d9dfe8"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#e5eaf0"
              },
              {
                  "lightness": 17
              }
          ]
      }
  ]
  

  const myLatLng = {
    lat: 51.51663741555966, 
    lng:  -0.22268765361444207
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: true,
    styles: stylers,
  });



const contentString1=
    '<div id="content">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><a href="https://parkhouselondon.co.uk"> Park House </a></h1>' +
    '<div id="bodyContent">' +
    "<p>Park House London <br> West London <br> W10 <br> London</p>" + 
    "<br>" +
    '<a href="https://goo.gl/maps/tuzt2fgCmrp4HPQ26" target="_blank"><p> Click here to view in Google Maps </p></a>'
    "</div>" +
    "</div>";


  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
  });
  var marker1 = new google.maps.Marker({
    position: {    lat: 51.5160698, lng: -0.2233701}, 
    map,
    title: "Park House",
    icon: 'https://nathanwinter.uk/ParkHouse/img/graphic/pin.png',
    content: 'Park House'
  });

  marker1.addListener("click", () => {
    infowindow1.open(map, marker1);
  });

} 

