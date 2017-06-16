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
};

var artworkArray = [];



//---------------FRONTEND---------------//
$(function(){

  $(".input-form").submit(function(event){
    event.preventDefault();
    $("#error").hide();
    $(".static6").hide();
    var inputArtist = $("#artist").val();
    var inputAlbum = $("#album").val();
    var inputYear = $("#year").val();
    var inputArtwork = $("#artwork").val();

    if (artworkArray.includes(inputArtwork) === false) {
      var newBoa = new Boa(inputArtist, inputAlbum, inputYear, inputArtwork);

      console.log(newBoa);

      $("#gallery").prepend('<div id="album' + clicks + '"><div class="opac"><h2>' + newBoa.artist + '</h2><h2>' + newBoa.album + '</h2><h3>' + newBoa.year + '</h3></div></div>');

      $("#album" + clicks).css("background-image",'url("' + newBoa.artwork + '")');

      artworkArray.push(newBoa.artwork);
    }
    else {
      $("#error").show();
    }
  });


});

// <img src="'+ newBoa.artwork + '"/>
