var target = document.getElementById('target');
var titles = [
    'For Demacia!',
    'Hyah!',
    'You can\'t milk those',
    'Fus Ro Dah!',
    'GGEZ',
    'ff@20',
    'The cake is a lie',
    'You require more vespene gas',
    'War, war never changes',
    'You Died',
    'Get over here!',
    'It\'s dangerous to go alone! Take this.',
    'Thank you, Mario! But our princess is in another castle',
    'Finish him!',
    'Hey! Listen!',
    'It\'s super effective!',
    'Do a barrel roll!',
    'Stop right there, criminal scum!',
    'Praise the sun!',
    'It\'s a-me, Mario!',
    'HADOUKEN!',
    '....',
    'Ok.',
    'Captain Teemo on duty!',
    'Gems are truly, truly, truly, outrageous',
    'Who needs a map?',
    'You belong in a museum!',
    'Gnar gada!',
    'Imagine if I had a real weapon',
    'Skyrim belongs to the nords!',
    'No lollygaggin\'',
    'CURVED... SWORDS!',
    'Hey you. You\'re finally awake...',
    '(handprint) We Know',
    'A summoner has disconnected',
    'PENTAKILL',

];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

newTitle();
