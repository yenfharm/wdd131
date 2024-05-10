const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(1);
}

const windChillElement = document.querySelector('#wind-chill');

const windChillValue = calculateWindChill(temperature, windSpeed);
windChillElement.textContent = `Wind Chill: ${windChillValue}°C`;

document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified on: ${lastModified}`;