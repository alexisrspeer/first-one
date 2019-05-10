
function calculateSpace()
{
    const marsDistance = 33900000;
    const venusDistance = 162000000;
    const mercuryDistance = 48000000;
    const jupiterDistance = 365000000;
    const saturnDistance = 746000000;
    const uranusDistance = 1980000000;
    const neptuneDistance = 2700000000;
    const plutoDistance = 4670000000;
    const place = document.getElementById("Place").value;
    const travel = document.getElementById("Travel").value;
    const speed = document.getElementById("milesperhour").value;  
    let result;
    let placename = document.getElementById("Place").value;
    let placetransportation = document.getElementById("Travel").value;

    
    
if (place === "0")
    {
        alert("Please select a place");
        return;
    }
    
else if (travel === "0" && speed === "")
    {
        alert("Please select a speed or way of travel");
        return;
    }
    
if (place == "mars" && travel == "walking" && speed =="")
    {
       result = Math.round((marsDistance/3.1) /24) + " days";
    }
else if (place == "mars" && travel == "on a bike" && speed =="")
    {
        result = Math.round((marsDistance/9.6) /24) + " days";
    }
else if (place == "mars" && travel == "in a car" && speed =="")
    {
        result = Math.round((marsDistance/25) /24) + " days";
    }
else if (place == "mars" && travel == "on a plane" && speed =="")
    {
        result = Math.round((marsDistance/575) /24) + " days";
    }
else if (place == "mars" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((marsDistance/17600) /24) + " days";
    }
else if (place == "mars" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

    
    
if (place == "venus" && travel == "walking" && speed =="")
    {
       result = Math.round((venusDistance/3.1) /24) + " days";
    }
else if (place == "venus" && travel == "on a bike" && speed =="")
    {
        result = Math.round((venusDistance/9.6) /24) + " days";
    }
else if (place == "venus" && travel == "in a car" && speed =="")
    {
        result = Math.round((venusDistance/25) /24) + " days";
    }
else if (place == "venus" && travel == "on a plane" && speed =="")
    {
        result = Math.round((venusDistance/575) /24) + " days";
    }
else if (place == "venus" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((venusDistance/17600) /24) + " days";
    }
else if (place == "venus" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

    
    
if (place == "mercury" && travel == "walking" && speed =="")
    {
       result = Math.round((mercuryDistance/3.1) /24) + " days";
    }
else if (place == "mercury" && travel == "on a bike" && speed =="")
    {
        result = Math.round((mercuryDistance/9.6) /24) + " days";
    }
else if (place == "mercury" && travel == "in a car" && speed =="")
    {
        result = Math.round((mercuryDistance/25) /24) + " days";
    }
else if (place == "mercury" && travel == "on a plane" && speed =="")
    {
        result = Math.round((mercuryDistance/575) /24) + " days";
    }
else if (place == "mercury" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((mercuryDistance/17600) /24) + " days";
    }
else if (place == "mercury" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

    
    
if (place == "jupiter" && travel == "walking" && speed =="")
    {
       result = Math.round((jupiterDistance/3.1) /24) + " days";
    }
else if (place == "jupiter" && travel == "on a bike" && speed =="")
    {
        result = Math.round((jupiterDistance/9.6) /24) + " days";
    }
else if (place == "jupiter" && travel == "in a car" && speed =="")
    {
        result = Math.round((jupiterDistance/25) /24) + " days";
    }
else if (place == "jupiter" && travel == "on a plane" && speed =="")
    {
        result = Math.round((jupiterDistance/575) /24) + " days";
    }
else if (place == "jupiter" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((jupiterDistance/17600) /24) + " days";
    }
else if (place == "jupiter" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

    
    
if (place == "saturn" && travel == "walking" && speed =="")
    {
       result = Math.round((saturnDistance/3.1) /24) + " days";
    }
else if (place == "saturn" && travel == "on a bike" && speed =="")
    {
        result = Math.round((saturnDistance/9.6) /24) + " days";
    }
else if (place == "saturn" && travel == "in a car" && speed =="")
    {
        result = Math.round((saturnDistance/25) /24) + " days";
    }
else if (place == "saturn" && travel == "on a plane" && speed =="")
    {
        result = Math.round((saturnDistance/575) /24) + " days";
    }
else if (place == "saturn" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((saturnDistance/17600) /24) + " days";
    }
else if (place == "saturn" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

    
if (place == "uranus" && travel == "walking" && speed =="")
    {
       result = Math.round((uranusDistance/3.1) /24) + " days";
    }
else if (place == "uranus" && travel == "on a bike" && speed =="")
    {
        result = Math.round((uranusDistance/9.6) /24) + " days";
    }
else if (place == "uranus" && travel == "in a car" && speed =="")
    {
        result = Math.round((uranusDistance/25) /24) + " days";
    }
else if (place == "uranus" && travel == "on a plane" && speed =="")
    {
        result = Math.round((uranusDistance/575) /24) + " days";
    }
else if (place == "uranus" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((uranusDistance/17600) /24) + " days";
    }
else if (place == "uranus" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

    
    
if (place == "neptune" && travel == "walking" && speed =="")
    {
       result = Math.round((neptuneDistance/3.1) /24) + " days";
    }
else if (place == "neptune" && travel == "on a bike" && speed =="")
    {
        result = Math.round((neptuneDistance/9.6) /24) + " days";
    }
else if (place == "neptune" && travel == "in a car" && speed =="")
    {
        result = Math.round((neptuneDistance/25) /24) + " days";
    }
else if (place == "neptune" && travel == "on a plane" && speed =="")
    {
        result = Math.round((neptuneDistance/575) /24) + " days";
    }
else if (place == "neptune" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((neptuneDistance/17600) /24) + " days";
    }
else if (place == "neptune" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

    
    
if (place == "pluto" && travel == "walking" && speed =="")
    {
       result = Math.round((plutoDistance/3.1) /24) + " days";
    }
else if (place == "pluto" && travel == "on a bike" && speed =="")
    {
        result = Math.round((plutoDistance/9.6) /24) + " days";
    }
else if (place == "pluto" && travel == "in a car" && speed =="")
    {
        result = Math.round((plutoDistance/25) /24) + " days";
    }
else if (place == "pluto" && travel == "on a plane" && speed =="")
    {
        result = Math.round((plutoDistance/575) /24) + " days";
    }
else if (place == "pluto" && travel == "in a rocket" && speed =="")
    {
        result = Math.round((plutoDistance/17600) /24) + " days";
    }
else if (place == "pluto" && travel == "by teleportation" && speed =="")
    {
        result = "INSTANTLY!";
    }

let speedname = document.getElementById("milesperhour").value;
    
if (place == "mars" && travel == "0")
    {
        result = Math.round((marsDistance/speed)/24) + " days";
        document.getElementById("placetransportation").style.display = "none";
        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
else if (place == "venus" && travel == "0")
    {
        result = Math.round((venusDistance/speed)/24) + " days";
        document.getElementById("placetransportation").style.display = "none";
        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
else if (place == "mercury" && travel == "0")
    {
        result = Math.round((mercuryDistance/speed)/24) + " days";
        document.getElementById("placetransportation").style.display = "none";
        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
else if (place == "jupiter" && travel == "0")
    {
        result = Math.round((jupiterDistance/speed)/24) + " days";
        document.getElementById("placetransportation").style.display = "none";
        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
else if (place == "saturn" && travel == "0")
    {
        result = Math.round((saturnDistance/speed)/24) + " days";
        document.getElementById("placetransportation").style.display = "none";
        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
else if (place == "uranus" && travel == "0")
    {
        result = Math.round((uranusDistance/speed)/24) + " days";
        document.getElementById("placetransportation").style.display = "none";
        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
else if (place == "neptune" && travel == "0")
    {
        result = Math.round((neptuneDistance/speed)/24) + " days";
        document.getElementById("placetransportation").style.display = "none";
        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
else if (place == "pluto" && travel == "0")
    {
        result = Math.round((plutoDistance/speed)/24) + " days";

        document.getElementById("speedname").innerHTML = " going " + speedname + " mph";
    }
    
if (place != 0 && travel != 0 && speed !=0) {
    alert("You can only select a way of travel OR enter a speed");
    return;
}
    
document.getElementById("spaceresults").innerHTML = result;
document.getElementById("placename").innerHTML = placename;


     
}

document.getElementById("calculate").onclick = function() {
    calculateSpace()
};