const imageContainer = document.querySelector('.image-container');
const loader = document.getElementById('loader');

let photosArray = [];
let ready = true;
let countImageLoad = 0; 
// Unsplash API
let count = 20; // Changed from const to let since you modify it later
const apiKey = '-pkwqDA4GAgr5OPAXNM8RpGgq5ins623yrZGqjbecUw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function setLoaderHidden() {
    if (countImageLoad === photosArray.length) {
        loader.hidden = true;
    }
}

// Create Card Element for each photo
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create card container
        const card = document.createElement('div');
        card.className = 'card';
        
        // Create anchor/link
        const item = document.createElement('a');
        setAttributes(item, {
            'href': photo.links.html,
            'target': '_blank'
        });

        // Create image
        const img = document.createElement('img');
        setAttributes(img, {
            'src': photo.urls.regular,
            'alt': photo.alt_description,
            'title': photo.alt_description
        });

        // Create card info section
        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';
        
        const title = document.createElement('h3');
        title.textContent = photo.user.name || 'Unknown Photographer';
        
        const description = document.createElement('p');
        description.textContent = photo.alt_description || 'Beautiful image from Unsplash';
        
        // Assemble the card
        cardInfo.appendChild(title);
        cardInfo.appendChild(description);
        
        item.appendChild(img);
        card.appendChild(item);
        card.appendChild(cardInfo);
        
        imageContainer.appendChild(card);
        countImageLoad++;
        img.addEventListener('load', setLoaderHidden);
    });
    
    ready = true;
    count = 20; // This will affect the next API call
}

// Get Photos from Unsplash API
async function getPhoto() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch(error) {
        console.error("Error fetching photos:", error);
    }
}

// Check if scrolling near bottom of page to load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhoto();
    }
});

// On load
document.addEventListener('DOMContentLoaded', getPhoto);