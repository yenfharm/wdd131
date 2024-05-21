document.getElementById("currentyear").innerHTML = new Date().getFullYear();
  // Update the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified on: ${lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
    templeName: "Anchorage",
    location: "Alaska",
    dedicated: "1999, June, 7",
    area: 96630,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/9591632feb8a8e4221de920d9bf78b23b950a5e0/full/1600%2C/0/default"
},
{
    templeName: "Accra",
    location: "Africa, Ghana",
    dedicated: "2004, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
},
{
    templeName: "Berna Suiza",
    location: "Suiza",
    dedicated: "1995, September, 11",
    area: 11500,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/d987d547ea75e1556e719efd8cf1a3067cfc40c4/full/1920%2C/0/default"
},
{
    templeName: "Buenos Aires Argentina",
    location: "Argentina",
    dedicated: "1986, January, 17",
    area: 11500,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/396dd44dcb8c55b10150bae7f3916389465acc0d/full/1600%2C/0/default"
},
];
const templeCards = document.getElementById('temple-cards');

temples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const name = document.createElement('h2');
    name.textContent = temple.templeName;
    card.appendChild(name);

    const location = document.createElement('p');
    location.textContent = temple.location;
    card.appendChild(location);

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;
    card.appendChild(area);

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy';
    card.appendChild(image);
    templeCards.appendChild(card);
});