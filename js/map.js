//function that creates a map:
     var map;
     var markers=[];


     function initMap() {
       closeAbout();
       zeroPhotos();
       map= new google.maps.Map(document.getElementById('map'),
     {center: {lat: 52.229675, lng: 21.012230},
   zoom:13})
   document.getElementById('map').style.display="block";

   var locations = [
     {title: 'Skarżysko-Kamienna', location: {lat: 51.117440, lng: 20.867060}},
     {title: 'Kielce', location: {lat: 50.866077, lng: 20.628569}},
     {title: 'Chęciny', location: {lat: 50.800090, lng: 20.462210}},
     {title: 'Szydłów', location: {lat: 50.587020, lng: 20.999970}},
     {title: 'Sandomierz', location: {lat: 50.682240, lng: 21.750177}},
     {title: 'Kazimierz Dolny', location: {lat: 51.322910, lng: 21.950890}},
   ];
  // var largeInfowindow = new google.maps.InfoWindow();

   for (var i = 0; i < locations.length; i++) {
     // Get the position from the location array.
     var position = locations[i].location;
     var title = locations[i].title;
     // Create a marker per location, and put into markers array.
     var marker = new google.maps.Marker({
       position: position,
       title: title,
       animation: google.maps.Animation.DROP,
       //icon:defaultIcon,
       id: i
     });
     // Push the marker to our array of markers.
     markers.push(marker);

    }
    showListings()
  }
    function closeMap(){
      document.getElementById('map').style.display="none";
    }

    function showListings() {
      var bounds = new google.maps.LatLngBounds();
      // Extend the boundaries of the map for each marker and display the marker
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
      }
      map.fitBounds(bounds);
    }
