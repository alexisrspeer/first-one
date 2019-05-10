//Declare variables to calculate macros
function calculateMacros()
{
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const weight = document.getElementById("currentweight").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const Exercise = document.getElementById("Exercise").value;
    let BMR;
    let TDE;
    let protein;
    let fat;
    let carbs;
    let calories;
    let calories2;
    
//Alerts to make sure all fields are entered    
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
    
else if ( Exercise == 0)
    {
        alert("Please select your activity level");
        return;
    }
   
//Different formulas for male & female
    
if (male)
    {
        BMR = (6.2 * weight) + (12.7 * height) - (6.76 * age) + 66;
    }

else (female)
    {
        BMR = (4.35 * weight) + (4.7 * height) - (4.7 * age) + 655.1;
    }
    
// Determine daily expenditure based on activity
    
if (Exercise == 1)
    {
       TDE = BMR * 1.1;
    }

else if (Exercise == 2)
    {
        TDE = BMR * 1.275;
    }
else if (Exercise == 3)
    {
        TDE = BMR * 1.35;
    }

else if (Exercise == 4)
    {
        TDE = BMR * 1.525;
    }
    
// Declare variables to determine numbers for loss and gain

    let fifteenloss = Math.round(TDE - (TDE * 0.15));
    let tenloss = Math.round(TDE - (TDE * 0.1));
    let twentyloss = Math.round(TDE - (TDE * 0.2));
    
    let fivegain = Math.round(TDE + (TDE * 0.05));
    let tengain = Math.round(TDE + (TDE * 0.1));
    let fifteengain = Math.round(TDE + (TDE * 0.15));

// Display Results
            
    document.getElementById("totalResults2").style.display = "block";
    document.getElementById("spotone").innerHTML = Math.round(TDE) + " calories";
    document.getElementById("spottwo").innerHTML = tenloss + " calories";
    document.getElementById("spotthree").innerHTML = fifteenloss + " calories";
    document.getElementById("spotfour").innerHTML = twentyloss + " calories";
    document.getElementById("spotfive").innerHTML = fivegain + " calories";
    document.getElementById("spotsix").innerHTML = tengain + " calories";
    document.getElementById("spotseven").innerHTML = fifteengain + " calories";

    proteinone = Math.round((TDE*0.3)/4) + " grams."
    fatone = Math.round((TDE*0.3)/9) + " grams."
    carbsone = Math.round((TDE*0.4)/4) + " grams."

    proteintwo = Math.round((tenloss*0.3)/4) + " grams."
    fattwo = Math.round((tenloss*0.3)/9) + " grams."
    carbstwo = Math.round((tenloss*0.4)/4) + " grams."

    proteinthree = Math.round((fifteenloss*0.3)/4) + " grams."
    fatthree = Math.round((fifteenloss*0.3)/9) + " grams."
    carbsthree = Math.round((fifteenloss*0.4)/4) + " grams."

    proteinfour = Math.round((twentyloss*0.3)/4) + " grams."
    fatfour = Math.round((twentyloss*0.3)/9) + " grams."
    carbsfour = Math.round((twentyloss*0.4)/4) + " grams."
    
    proteinfive = Math.round((fivegain*0.3)/4) + " grams."
    fatfive = Math.round((fivegain*0.3)/9) + " grams."
    carbsfive = Math.round((fivegain*0.4)/4) + " grams."
    
    proteinsix = Math.round((tengain*0.3)/4) + " grams."
    fatsix = Math.round((tengain*0.3)/9) + " grams."
    carbssix = Math.round((tengain*0.4)/4) + " grams."
    
    proteinseven = Math.round((fifteengain*0.3)/4) + " grams."
    fatseven = Math.round((fifteengain*0.3)/9) + " grams."
    carbsseven = Math.round((fifteengain*0.4)/4) + " grams."

    document.getElementById("proteinone").innerHTML = proteinone;
    document.getElementById("fatone").innerHTML = fatone;
    document.getElementById("carbsone").innerHTML = carbsone;

    document.getElementById("proteintwo").innerHTML = proteintwo;
    document.getElementById("fattwo").innerHTML = fattwo;
    document.getElementById("carbstwo").innerHTML = carbstwo;

    document.getElementById("proteinthree").innerHTML = proteinthree;
    document.getElementById("fatthree").innerHTML = fatthree;
    document.getElementById("carbsthree").innerHTML = carbsthree;

    document.getElementById("proteinfour").innerHTML = proteinfour;
    document.getElementById("fatfour").innerHTML = fatfour;
    document.getElementById("carbsfour").innerHTML = carbsfour;
    
    document.getElementById("proteinfive").innerHTML = proteinfive;
    document.getElementById("fatfive").innerHTML = fatfive;
    document.getElementById("carbsfive").innerHTML = carbsfive;
    
    document.getElementById("proteinsix").innerHTML = proteinsix;
    document.getElementById("fatsix").innerHTML = fatsix;
    document.getElementById("carbssix").innerHTML = carbssix;
    
    document.getElementById("proteinseven").innerHTML = proteinseven;
    document.getElementById("fatseven").innerHTML = fatseven;
    document.getElementById("carbsseven").innerHTML = carbsseven;
       
    
    
}




document.getElementById("calculate").onclick = function() {
    calculateMacros()
};

