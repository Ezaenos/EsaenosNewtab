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

//function fetchImage() {
   // const storedData = localStorage.getItem('backgroundImage');
   // const now = new Date().getTime();

   // if (storedData) {
     //   const { url, timestamp } = JSON.parse(storedData);
        // If the stored image is less than 5 minutes old, use it
     //   if (now - timestamp < 2 * 60 * 1000) {
      //      $.backstretch(url);
       //     return;
        }
    }

    // Fetch a new image
   // fetch('https://api.unsplash.com/photos/random?query=taiwan landscape&orientation=landscape&client_id=xvrrFa6IsI6YDDi_hO3JzviSOPJesUkbR5zYq839UKc')
      //  .then(response => response.json())
      //  .then(data => {
         //   if (data && data.urls && data.urls.full) {
            //    const imageUrl = data.urls.full;
             //   $.backstretch(imageUrl);
             //   localStorage.setItem('backgroundImage', JSON.stringify({ url: imageUrl, timestamp: now }));

                // Update the word
                updateWord();
            } else {
                // Show default image or error message
            }
        })
        .catch(error => console.error('Error:', error));
}

// Call fetchImage initially
//fetchImage();
// And every 5 minutes
//setInterval(fetchImage, 2 * 60 * 1000);
let words = [];

fetch('words.json')
    .then(response => response.json())
    .then(data => words = data)
    .catch(error => console.error('Error:', error));

// List of Chinese words with Pinyin and translation

// Function to update the word
function updateWord(forceUpdate = false) {
    console.log('updateWord function called');
    const storedWordData = localStorage.getItem('currentWord');
    const now = new Date().getTime();

    // Apply blur immediately
    document.getElementById('pinyin').style.filter = "blur(5px)";
    document.getElementById('translation').style.filter = "blur(5px)";

    if (!forceUpdate && storedWordData) {
        const { word, pinyin, translation, timestamp } = JSON.parse(storedWordData);
        // If the stored word is less than 5 minutes old, use it
        if (now - timestamp < 2 * 60 * 1000) {
            document.getElementById('word').textContent = word;
            document.getElementById('pinyin').textContent = pinyin;
            document.getElementById('translation').textContent = translation;
            return;
        }
    }

    // Select a new word
    const newWord = words[Math.floor(Math.random() * words.length)];

    // Delay the display of the new word
    setTimeout(() => {
        // Update the word, pinyin and translation on the page
        document.getElementById('word').textContent = newWord.word;
        document.getElementById('pinyin').textContent = newWord.pinyin;
        document.getElementById('translation').textContent = newWord.translation;

        // Store the new word in local storage
        localStorage.setItem('currentWord', JSON.stringify({ ...newWord, timestamp: now }));
    }, 100); // Adjust the delay as needed
}

// Call the function to update the word
updateWord();

document.getElementById('pinyin').addEventListener('mouseover', function() {
    this.style.filter = "none";
});

document.getElementById('translation').addEventListener('mouseover', function() {
    this.style.filter = "none";
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('nextWord').addEventListener('click', function() {
        updateWord(true);
    });

});
