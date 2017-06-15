//---------------BACKEND---------------//
//Player Constructor
function Boa(artist, album, year, artwork) {
  this.artist = artist;
  this.album = album;
  this.year = year;
  this.artwork = artwork;
}

var clicks = 0;
function onClick() {
    clicks += 1;
    // document.getElementById("add-address").innerHTML = clicks;
};
//---------------FRONTEND---------------//
$(function(){
  $(".input-form").submit(function(event){
    event.preventDefault();
    var inputArtist = $("#artist").val();
    var inputAlbum = $("#album").val();
    var inputYear = $("#year").val();
    var inputArtwork = $("#artwork").val();
    var newBoa = new Boa(inputArtist, inputAlbum, inputYear, inputArtwork);

    console.log(newBoa);

    $("#gallery").prepend('<div id="album' + clicks + '"><h2>' + newBoa.artist + '</h2><h2>' + newBoa.album + '</h2><h3>' + newBoa.year + '</h3></div>');

    $("#album" + clicks).css("background-image",'url("' + newBoa.artwork + '")');
  });
});

// <img src="'+ newBoa.artwork + '"/>
