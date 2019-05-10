// Code to display information based on button click

function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("demo").innerHTML =
  xhttp.responseText;
}

// Changes padding in paragraph

$("button").click(function(){


$("p").animate({opacity: '0.8', padding: '20px'}, "fast");
$("p").animate({opacity: '0.9', padding: '10px'}, "fast");
$("p").animate({opacity: '1.0', padding: '5px'}, "fast");

// Moves the contact links upon button click    
    
$("a.headerlinks").animate({paddingLeft: '1vw'}, "fast");
$("a.headerlinks").animate({paddingLeft: '5vw'}, "fast");
$("a.headerlinks").animate({paddingLeft: '10vw'}, "fast");
$("a.headerlinks").animate({paddingLeft: '15vw'}, "fast");
$("a.headerlinks").animate({paddingLeft: '20vw'}, "fast");
$("a.headerlinks").animate({paddingLeft: 'vw'}, "fast");
$("a.headerlinks").animate({paddingLeft: '0vw'}, "fast");
$("a.headerlinks").animate({fontSize: '30px'}, "fast");
}); 



