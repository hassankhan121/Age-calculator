// Prompt  birthdate
let birthdate = prompt("Enter your date of birth as a number(1-31) ");
// Check if the birth date is a number, if not show alert and prompt again
while (isNaN(birthdate)) {
  alert("Please enter a number for your birth DATE");
  birthdate = prompt("Enter your birth date as a number (1-12)");
}

// Prompt birth month
let birthmonth = prompt("Enter your birth month as a number (1-12)");

// Check if the birth month is a number, if not show alert and prompt again
while (isNaN(birthmonth)) {
  alert("Please enter a number for your birth month");
  birthmonth = prompt("Enter your birth month as a number (1-12)");
}

// Prompt  birth year
let birthyear = prompt("Enter your birth year in the format yyyy");

// current date
let currentDate = new Date();


let birthDateObj = new Date(birthyear, birthmonth - 1, birthdate);

// Calculate  the birthdate and the current date
let ageInMillis = currentDate.getTime() - birthDateObj.getTime();

// Convert the age
let ageInSeconds = ageInMillis / 1000;
let ageInMinutes = ageInSeconds / 60;
let ageInHours = ageInMinutes / 60;
let ageInDays = ageInHours / 24;
let ageInMonths = ageInDays / 30.44; 
let ageInYears = ageInDays / 365.25; 

ageInSeconds = Math.round(ageInSeconds);
ageInMinutes = Math.round(ageInMinutes);
ageInHours = Math.round(ageInHours);
ageInDays = Math.round(ageInDays);
ageInMonths = Math.round(ageInMonths);
ageInYears = Math.round(ageInYears);

// Display 
document.write("You are " + ageInYears + " years old, which is approximately " + ageInDays + " days old or " + ageInMonths + " months old.");
document.write("You are also " + ageInHours + " hours old, " + ageInMinutes + " minutes old, and " + ageInSeconds + " seconds old.");
