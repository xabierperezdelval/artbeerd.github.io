function displayRandomMessage() {
  var subtitlesData = [
    "No, YOU are the alcoholic!",
    "Nevermind the beer, here for the achievements.",
    "'Uma cerveja por favor' means 'You're hot AF' in Portuguese.",
    "The only thing sour in my life is beer. Fruity, preferably.",
    "Rating wisely after the fifth beer, now THAT'S being a hero!",
    "More bitter than your ex's heart.",
    "Hangovers gamified.",
    "The darker your beer, the harder you fall.",
    "Did you know? A single pastry stout pint counts as a full daily calorie intake!",
    "Pretend you know about beer, it's actually fun!",
    "Sticks and stones may break my bones, but barleywines also hurt me.",
    "I got 99 problems but a DIPA ain't one.",
    "Day 42: The barleywine isn't RAISIN any suspicion.",
    "Spinosaurus Aegyptiacus wouldn't want this warm piss for me to take.",
    "One NEIPA aaaaand you've tasted 'em all.",
    "You really should be drinking something right now, y'know."
  ];

  var randomIndex = Math.floor(Math.random() * subtitlesData.length);
  var randomMessage = subtitlesData[randomIndex];

  var messageElement = document.getElementById("heroSubtitle");
  messageElement.innerHTML = randomMessage;
}

window.onload = displayRandomMessage;
