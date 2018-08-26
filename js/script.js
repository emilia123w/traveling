function addAbout(){
  closeMap();
  zeroPhotos();
  document.getElementById('about').style.display="block";
}

function closeAbout(){
  document.getElementById('about').style.display="none";
}

var photos=[
  "<img tabindex=5 src='photos/bakowiec.jpg'>",
  "<img tabindex=6 src='photos/1.jpg'>",
  "<img tabindex=7 src='photos/2.jpg'>",
  "<img tabindex=8 src='photos/3.jpg'>",
  "<img tabindex=9 src='photos/4.jpg'>",
  "<img tabindex=10 src='photos/5.jpg'>",
  "<img tabindex=11 src='photos/6.jpg'>",
  "<img tabindex=12 src='photos/7.jpg'>",
  "<img tabindex=13 src='photos/8.jpg'>",
  "<img tabindex=14 src='photos/9.jpg'>",
  "<img tabindex=15 src='photos/10.jpg'>",
  "<img tabindex=16 src='photos/11.jpg'>",
  "<img tabindex=17 src='photos/12.jpg'>",
  "<img tabindex=18 src='photos/13.jpg'>",
  "<img tabindex=19 src='photos/14.jpg'>",
  "<img tabindex=20 src='photos/15.jpg'>",
  "<img tabindex=21 src='photos/16.jpg'>",
  "<img tabindex=22 src='photos/17.jpg'>",
  "<img tabindex=23 src='photos/18.jpg'>",
  "<img tabindex=24 src='photos/19.jpg'>",
  "<img tabindex=25 src='photos/20.jpg'>",
  "<img tabindex=26 src='photos/21.jpg'>",
  "<img tabindex=27 src='photos/22.jpg'>",
  "<img tabindex=28 src='photos/23.jpg'>",
]

function displayPhotos(){
  closeMap();
  closeAbout();
  zeroPhotos();
  $("body").append("<div class='galery'>" +photos+"</div>")
}

function zeroPhotos(){
  $(".galery").remove();
}


$('body').on('click','img',function(){

  this.style.width="600px";
  setTimeout(function getSizeBack(){
    $('img').css("width","300px")
  },5000)
})
