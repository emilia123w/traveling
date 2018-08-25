//function that creates a map:
     var map;

     function initMap() {
       closeAbout()
       map= new google.maps.Map(document.getElementById('map'),
     {center: {lat: 52.229675, lng: 21.012230},
   zoom:13})
   document.getElementById('map').style.display="block";

    }

    function closeMap(){
      document.getElementById('map').style.display="none";
    }
