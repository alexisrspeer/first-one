function contactForm()
{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const numbers = document.getElementById("numbers").value;
    const time = document.getElementById("time").value;
    const allergies = document.getElementById("allergies").value;
    const noteat = document.getElementById("noteat").value;
    const willeat = document.getElementById("willeat").value;
    const store = document.getElementById("store").value;
    const days = document.getElementById("days").value;

    
    
if (name == "")
    {
        alert("Please enter your name.");
    }
else if (email == "")
    {
        alert("Please enter your email address.");
    }
else if (numbers == "")
    {
        alert("Please enter your macro numbers.");
    }     
    
      $.ajax({
        url: "../mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          email: email,
            numbers: numbers,
            time: time,
            allergies: allergies,
            noteat: noteat,
            willeat: willeat,
            store: store
        }
      })
    
}


document.getElementById("Submit").onclick = function() {
    contactForm()
};