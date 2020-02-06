$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

upto(); 
function upto() {
  var obj = JSON.parse(JSON.stringify(text));
  document.getElementById("uptoLBH").textContent = obj.destinations[1].upto;
  document.getElementById("uptoIRS").textContent = obj.destinations[5].upto;
  document.getElementById("uptoGAH").textContent = obj.destinations[8].upto;
}

country(); 
function country() {
  var obj = JSON.parse(JSON.stringify(text));
  document.getElementById("countryLBH").textContent = obj.destinations[1].country + " " + "-" + " "+ obj.destinations[1].place;
  document.getElementById("countryIRS").textContent = obj.destinations[5].country + " " + "-" + " "+ obj.destinations[5].place;
  document.getElementById("countryGAH").textContent = obj.destinations[8].country + " " + "-" + " "+ obj.destinations[8].place;
}

hotel(); 
function hotel() {
  var obj = JSON.parse(JSON.stringify(text));
  document.getElementById("hotelLBH").textContent = obj.destinations[1].label + " " + obj.destinations[1].rating;
  document.getElementById("hotelIRS").textContent = obj.destinations[5].label + " " + obj.destinations[5].rating;
  document.getElementById("hotelGAH").textContent = obj.destinations[8].label + " " + obj.destinations[8].rating;
}

tags(); 
function tags() {
  var obj = JSON.parse(JSON.stringify(text));
  document.getElementById("tagLBHP").textContent = obj.destinations[1].tags[0].classname;
  document.getElementById("tagLIRP").textContent = obj.destinations[5].tags[0].classname;
  document.getElementById("tagLGAP").textContent = obj.destinations[8].tags[0].classname;
  document.getElementById("tagLBHO").textContent = obj.destinations[1].tags[0].label;
  document.getElementById("tagLIRO").textContent = obj.destinations[5].tags[0].label;
  document.getElementById("tagLGAO").textContent = obj.destinations[8].tags[0].label;
}

