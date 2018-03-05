mapboxgl.accessToken = 'pk.eyJ1IjoidGhlbmVyZHlvdWtub3ciLCJhIjoiY2pkeWlwNTk0MTZ3ZzJ3bjhwbDBvNWM5NyJ9.Pe-hHF2gSiqTFO8M1CTmiQ';

var chapters = {
    'part-1': {
        center: [79.8, 20.88],
        zoom: 4.3,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [77.1016, 28.6375],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [72.8561, 19.0022],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-4': {
        center: [ 77.59796,
      12.96991],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-5': {
        center: [  80.27,
      13.09],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-6': {
        center: [88.33778,
      22.54111],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-7': {
        center: [78.46667,
      17.36667],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-8': {
        center: [76.266935,
      9.901199],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-9': {
        center: [ 72.58,
      23.03],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-10': {
        center: [74.030543,
      15.29299],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
    'part-11': {
        center: [73.84778,
      18.52361],
        zoom: 11.1,
        bearing: 0,
        pitch: 0,
    },
};


var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/thenerdyouknow/cjed68sma2pud2rmt23um7tsr',
        center: [79.8, 20.88],
        zoom: 4.3,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}