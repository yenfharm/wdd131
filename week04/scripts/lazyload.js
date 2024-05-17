document.getElementById("currentyear").innerHTML = new Date().getFullYear();

  // Update the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified on: ${lastModified}`;




const images = document.querySelectorAll('img[loading="lazy"]');

images.forEach((img) => {
    img.addEventListener('load', () => {
        img.classList.add('is-loaded');
});
});