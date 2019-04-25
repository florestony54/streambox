var target = document.getElementById('luck-modal-text');
var number = document.getElementById('roll-num');
var titles = {
    1: 'You have a Teemo jungle. And he forgot to bring smite...',
    2: 'The Yasuo on your team goes AFK, but at least he stops feeding the other team.',
    3: 'Your bot lane is duo. They\'re both 0/3/0, but they are blaming the jungler for not ganking. You are the jungler.',
    4: 'You tower dive your lane opponent for an ez kill, but the enemy Warwick arrives just in time to R you under turret and kill you instead.',
    5: 'You go up in lane 2/0, but your support DC\'s and you end up getting turret dove repeatedly.',
    8: 'As Blitzcrank, you land a Q on the 5/0 Veigar after he wastes his E! Your team fails to follow up and you die.',
    7: 'You\'re Jinx, 3 enemies are extremely low and grouped together. R lined up, coming in hot! Yasuo flashes just before it hits and windwalls your R. No one died...',
    6: 'Remember when you were about to dodge because your jungler locked in Twitch against a Lee Sin, but they said \'Trust me\'? Yeah you should have dodged...',
    9: 'You just put down the calculator. You know this dive will work. You dive your lane opponent and kill them. You get away, until the last tick of ignite kills you',
    10: 'The wards you placed on the map end up being useful! No one acknowledges it though...',
    11: 'Double kill! Yes, I know its lame. You rolled 11...',
    12: 'Triple kill!! Hey, now we\'re getting somewhere!',
    13: 'Sweet 5 man Malphite ult! One teammate chats: \'nice\'.',
    14: 'You\'re a mid/adc main. Autofill: Support. You play a solid game, win, and get 4 honors!',
    15: 'An enemy accuses you of scripting after you outplay them. LOL scrub!',
    16: 'As the last one alive on your team, you chunk a cleaver across the baron wall and steal baron for your team. Mundo goes where he pleases.',
    17: 'You go 6/0 mid, killing everyone all over the map. They ff@20. EZ.',
    18: 'PENTAKILL IIIII',
    19: 'You play against that one toxic guy that was on your team last game, and you STOMP him in lane. You get to report him again cuz he AFKs and you get the report feedback message!',
    20: 'Old-school runes are back. You brought the 1% crit rune and crit at level 1 that snowballs into a won lane, and they ff@20.',

};

var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    var randNum = Object.keys(obj).length * Math.random() << 0;
    var randEvent = obj[randNum];
    number.innerText = randNum;
    target.innerText = randEvent;
};

randomProperty(titles);
