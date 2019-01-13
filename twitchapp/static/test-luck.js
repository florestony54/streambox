var target = document.getElementById('luck-modal-text');
var titles = [
    'You roll a 1: You have a Teemo jungle. And he forgot to bring smite...',
    'You roll a 2: The Yasuo on your team goes AFK, but at least he stops feeding the other team.',
    'You roll a 3: Your bot lane is duo. They\'re both 0/3/0, but they are blaming the jungler for not ganking. You are the jungler.',
    'You roll a 4: You tower dive your lane opponent for an ez kill, but the enemy Warwick arrives just in time to R you under turret and kill you first.',
    'You roll a 5: As Blitzcrank, you land a Q on the 5/0 Veigar after he wastes his E! Your team fails to follow up and you die.',
    'You roll a 20: Old-school runes are back. You brought the 1% crit rune and crit at level 1 that snowballs into a won lane, and they ff@20.',

];

function luckEvent () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

luckEvent();
