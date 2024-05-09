// Define static temperature and wind speed values
const temperature = 10;
const windSpeed = 5;

// Define the wind chill calculation function
function calculateWindChill(temperature, windSpeed) {
  // Use the formula for wind chill in Celsius
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(1); // Round to one decimal place
}

// Get the wind chill element from the DOM
const windChillElement = document.querySelector('#wind-chill');

// Calculate and display the wind chill
const windChillValue = calculateWindChill(temperature, windSpeed);
windChillElement.textContent = `Wind Chill: ${windChillValue}°C`;



document.getElementById("currentyear").innerHTML = new Date().getFullYear();

  // Update the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified on: ${lastModified}`;