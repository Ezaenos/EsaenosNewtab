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
    fetch('https://api.unsplash.com/photos/random?query=HD nature&orientation=landscape&client_id=xvrrFa6IsI6YDDi_hO3JzviSOPJesUkbR5zYq839UKc')
        .then(response => response.json())
        .then(data => {
            if (data && data.urls && data.urls.full) {
                const imageUrl = data.urls.full;
                $.backstretch(imageUrl);
                localStorage.setItem('backgroundImage', JSON.stringify({ url: imageUrl, timestamp: now }));

                // Update the word
                updateWord();
            } else {
                // Show default image or error message
            }
        })
        .catch(error => console.error('Error:', error));
}

// Call fetchImage initially
fetchImage();
// And every 5 minutes
setInterval(fetchImage, 2 * 60 * 1000);

// Add more event listeners as needed
// List of Chinese words with Pinyin and translation
const words = [
    { word: '你好', pinyin: 'nǐ hǎo', translation: 'Bonjour' },
    { word: '谢谢', pinyin: 'xièxie', translation: 'Merci' },
    { word: '再见', pinyin: 'zàijiàn', translation: 'Au revoir'},
    { word: '早上好', pinyin: 'zǎoshànghǎo', translation: 'Bon matin' },
    { word: '晚上好', pinyin: 'wǎnshànghǎo', translation: 'Bonsoir' },
    { word: '晚安', pinyin: 'wǎn ān', translation: 'Bonne nuit'},
    { word: '我爱你', pinyin: 'wǒ ài nǐ', translation: "je t'aime"},
    { word: '我想念你', pinyin: 'wǒ xiǎngniàn nǐ', translation: 'Tu me manques'},
    { word: '我很好', pinyin: 'wǒ hěn hǎo', translation: 'Je vais bien'},
    { word: '我很累', pinyin: 'wǒ hěn lèi', translation: 'je suis fatigué'},
    { word: '我很饿', pinyin: 'wǒ hěn è', translation: "j'ai faim"},
    { word: '我很渴', pinyin: 'wǒ hěn kě', translation: "j'ai soif"},
    { word: '我很冷', pinyin: 'wǒ hěn lěng', translation: "j'ai froid"},
    { word: '我很热', pinyin: 'wǒ hěn rè', translation: "j'ai chaud"},
    { word: '我很快乐', pinyin: 'wǒ hěn kuàilè', translation: "je suis heureux"},
    { word: '我很悲伤', pinyin: 'wǒ hěn bēishāng', translation: "je suis triste"},
    { word: '我很生气', pinyin: 'wǒ hěn shēngqì', translation: "je suis en colère"},
    { word: '我很紧张', pinyin: 'wǒ hěn jǐnzhāng', translation: "je suis nerveux"},
    { word: '我很害怕', pinyin: 'wǒ hěn hàipà', translation: "j'ai peur"},
    { word: '我很疼', pinyin: 'wǒ hěn téng', translation: "j'ai mal"},
    { word: '我很无聊', pinyin: 'wǒ hěn wúliáo', translation: "je m'ennuie"},
    { word: '我很烦', pinyin: 'wǒ hěn fán', translation: "je suis ennuyé"},
    { word: '我很开心', pinyin: 'wǒ hěn kāixīn', translation: "je suis content"},
    { word: '我很兴奋', pinyin: 'wǒ hěn xīngfèn', translation: "je suis excité"},
    { word: '我很惊讶', pinyin: 'wǒ hěn jīngyà', translation: "je suis surpris"},
    { word: '我很害羞', pinyin: 'wǒ hěn hàixiū', translation: "je suis timide"},
    { word: '你好吗', pinyin: 'nǐ hǎo ma', translation: 'Comment ça va ?' },
    { word: '谢谢你', pinyin: 'xièxie nǐ', translation: 'Merci' },
    { word: '对不起，我不懂', pinyin: 'duìbùqǐ, wǒ bù dǒng', translation: 'Désolé, je ne comprends pas' },
    { word: '请帮助我', pinyin: 'qǐng bāngzhù wǒ', translation: "Aidez-moi s'il vous plait" },
    { word: '我想学中文', pinyin: 'wǒ xiǎng xué zhōngwén', translation: 'je veux apprendre le chinois' },
    { word: '你叫什么名字', pinyin: 'nǐ jiào shénme míngzì', translation: "Comment tu t'appelles" },
    { word: '我叫...', pinyin: 'wǒ jiào...', translation: "Je m'appelle" },
    { word: '我不会说中文', pinyin: 'wǒ bù huì shuō zhōngwén', translation: 'Je ne peux pas parler chinois' },
    { word: '我喜欢台湾', pinyin: 'wǒ xǐhuān taiwan', translation: "J'aime Taiwan" },
    { word: '你', pinyin: 'nǐ', translation: 'tu' },
    { word: '好', pinyin: 'hǎo', translation: 'bien' },
    { word: '是', pinyin: 'shì', translation: 'être' },
    { word: '不', pinyin: 'bù', translation: 'ne pas' },
    { word: '我', pinyin: 'wǒ', translation: 'je, moi' },
    { word: '在', pinyin: 'zài', translation: 'être à, être dans' },
    { word: '有', pinyin: 'yǒu', translation: 'avoir' },
    { word: '这', pinyin: 'zhè', translation: 'ceci' },
    { word: '他', pinyin: 'tā', translation: 'il, lui' },
    { word: '们', pinyin: 'men', translation: 'pluriel' },
    { word: '来', pinyin: 'lái', translation: 'venir' },
    { word: '个', pinyin: 'gè', translation: 'classificateur générique' },
    { word: '去', pinyin: 'qù', translation: 'aller' },
    { word: '和', pinyin: 'hé', translation: 'et' },
    { word: '能', pinyin: 'néng', translation: 'pouvoir' },
    { word: '对', pinyin: 'duì', translation: 'correct' },
    { word: '也', pinyin: 'yě', translation: 'aussi' },
    { word: '得', pinyin: 'dé', translation: 'devoir' },
    { word: '以', pinyin: 'yǐ', translation: 'avec' },
    { word: '会', pinyin: 'huì', translation: 'savoir, pouvoir' },
    { word: '做', pinyin: 'zuò', translation: 'faire' },
    { word: '大', pinyin: 'dà', translation: 'grand' },
    { word: '得', pinyin: 'dé', translation: 'obtenir' },
    { word: '说', pinyin: 'shuō', translation: 'parler' },
    { word: '时', pinyin: 'shí', translation: 'temps' },
    { word: '看', pinyin: 'kàn', translation: 'regarder' },
    { word: '过', pinyin: 'guò', translation: 'passé' },
    { word: '小', pinyin: 'xiǎo', translation: 'petit' },
    { word: '只', pinyin: 'zhǐ', translation: 'seulement' },
    { word: '和', pinyin: 'hé', translation: 'et' },
    { word: '没', pinyin: 'méi', translation: 'ne pas avoir' },
    { word: '想', pinyin: 'xiǎng', translation: 'penser' },
    { word: '为', pinyin: 'wèi', translation: 'pour' },
    { word: '问', pinyin: 'wèn', translation: 'demander' },
    { word: '生', pinyin: 'shēng', translation: 'naissance' },
    { word: '着', pinyin: 'zhe', translation: 'en train de' },
    { word: '家', pinyin: 'jiā', translation: 'maison' },
    { word: '里', pinyin: 'lǐ', translation: 'à l\'intérieur' },
    { word: '学', pinyin: 'xué', translation: 'étudier' },
    { word: '开', pinyin: 'kāi', translation: 'ouvrir' },
    { word: '手', pinyin: 'shǒu', translation: 'main' },
    { word: '心', pinyin: 'xīn', translation: 'cœur' },
    { word: '多', pinyin: 'duō', translation: 'beaucoup' },
    { word: '天', pinyin: 'tiān', translation: 'jour' },
    { word: '么', pinyin: 'me', translation: 'quoi' },
    { word: '们', pinyin: 'men', translation: 'pluriel' },
    { word: '谁', pinyin: 'shéi', translation: 'qui' },
    { word: '那', pinyin: 'nà', translation: 'ça' },
    { word: '个', pinyin: 'gè', translation: 'classificateur générique' },
    { word: '能', pinyin: 'néng', translation: 'pouvoir' },
    { word: '好', pinyin: 'hǎo', translation: 'bien' },
    { word: '为', pinyin: 'wèi', translation: 'pour' },
    { word: '看', pinyin: 'kàn', translation: 'regarder' },
    { word: '得', pinyin: 'dé', translation: 'obtenir' },
    { word: '过', pinyin: 'guò', translation: 'passé' },
];

// Function to update the word
function updateWord(forceUpdate = false) {
    console.log('updateWord function called');
    const storedWordData = localStorage.getItem('currentWord');
    const now = new Date().getTime();

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

    // Update the word, pinyin and translation on the page
    document.getElementById('word').textContent = newWord.word;
    document.getElementById('pinyin').textContent = newWord.pinyin;
    document.getElementById('translation').textContent = newWord.translation;

    // Store the new word in local storage
    localStorage.setItem('currentWord', JSON.stringify({ ...newWord, timestamp: now }));
    document.getElementById('pinyin').style.filter = "blur(5px)";
}

// Call the function to update the word
updateWord();

document.getElementById('pinyin').addEventListener('mouseover', function() {
    this.style.filter = "none";
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('nextWord').addEventListener('click', function() {
        updateWord(true);
    });
});
