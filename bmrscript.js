// Declare variables to calculate BMR

function calculateMacros()
{
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const weight = document.getElementById("currentweight").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    let BMR;

    
// Create alerts if user skips a field
    
if (weight === "")
    {
        alert("Please enter your weight");
        return;
    }
    
else if (age === "")
    {
        alert("Please enter your age");
        return;
    }
    
else if (height === "")
    {
        alert("Please enter your height");
        return;
    }
    
//Different equations whether the person is male or female
    
if (male)
    {
        BMR = Math.round((6.2 * weight) + (12.7 * height) - (6.76 * age) + 66);
    }

else (female)
    {
        BMR = Math.round((4.35 * weight) + (4.7 * height) - (4.7 * age) + 655.1);
    }
    
// Display Results
    
document.getElementById("bmrspot").innerHTML = BMR + " calories"
     
}




document.getElementById("calculate").onclick = function() {
    calculateMacros()
};