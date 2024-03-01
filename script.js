function updateTime() {
    // Create a new Date object
    const now = new Date();
    // Get the current time as a string, without seconds
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // Find the element with id "time" and update its text content
    document.getElementById('time').textContent = timeString;
}

// Update the time immediately
updateTime();
// And every 30 seconds
setInterval(updateTime, 30000);

function fetchImage() {
    const storedData = localStorage.getItem('backgroundImage');
    const now = new Date().getTime();

    if (storedData) {
        const { url, timestamp } = JSON.parse(storedData);
        // If the stored image is less than 5 minutes old, use it
        if (now - timestamp < 2 * 60 * 1000) {
            $.backstretch(url);
            return;
        }
    }

    // Fetch a new image
    fetch('https://api.unsplash.com/photos/random?query=nature wallpaper&orientation=landscape&client_id=xvrrFa6IsI6YDDi_hO3JzviSOPJesUkbR5zYq839UKc')
        .then(response => response.json())
        .then(data => {
            $.backstretch(data.urls.full);
            // Store the new image URL and the current time
            localStorage.setItem('backgroundImage', JSON.stringify({ url: data.urls.full, timestamp: now }));
        })
        .catch(err => console.error(err));
}

// Call fetchImage initially
fetchImage();
// And every 5 minutes
setInterval(fetchImage, 2 * 60 * 1000);

// Add DuckDuckGo search functionality
document.getElementById('search-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();
    // Get the search query from the input field
    const query = document.getElementById('search-input').value;
    // Open a new tab with the DuckDuckGo search results for the query
    window.open('https://duckduckgo.com/?q=' + encodeURIComponent(query));
});

document.getElementById('bookmark1').addEventListener('click', function() {
    window.open('https://www.youtube.com/?bp=wgUCEAE%3D', '_blank');
});

document.getElementById('bookmark2').addEventListener('click', function() {
    window.open('https://www.twitch.tv/', '_blank');
});

// Add more event listeners as needed