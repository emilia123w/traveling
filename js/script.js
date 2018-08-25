function addAbout(){
  closeMap();
  document.getElementById('about').style.display="block";
}

function closeAbout(){
  document.getElementById('about').style.display="none";
}

var photos=[
  "<img src='photos/bakowiec.jpg'>",
  "<img src='photos/1.jpg'>",
  "<img src='photos/2.jpg'>",
  "<img src='photos/3.jpg'>",
  "<img src='photos/4.jpg'>",
  "<img src='photos/5.jpg'>",
  "<img src='photos/6.jpg'>",
  "<img src='photos/7.jpg'>",
  "<img src='photos/8.jpg'>",
  "<img src='photos/9.jpg'>",
  "<img src='photos/10.jpg'>",
  "<img src='photos/11.jpg'>",
  "<img src='photos/12.jpg'>",
  "<img src='photos/13.jpg'>",
  "<img src='photos/14.jpg'>",
  "<img src='photos/15.jpg'>",
  "<img src='photos/16.jpg'>",
  "<img src='photos/17.jpg'>",
  "<img src='photos/18.jpg'>",
  "<img src='photos/19.jpg'>",
  "<img src='photos/20.jpg'>",
  "<img src='photos/21.jpg'>",
  "<img src='photos/22.jpg'>",
  "<img src='photos/23.jpg'>",
]

function displayPhotos(){
  closeMap();
  closeAbout();
  $("body").append("<div class='galery'>" +photos+"</div>")
}
