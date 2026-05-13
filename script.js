// Excuse options split into 4 separate arrays.
const whoOptions = ["My dog 🐶", "My grandmother 👵", "The neighbor 🧑", "A police officer 👮"];
const actionVerbOptions = ["destroyed", "stole", "ate", "broke"];
const whatHappenedOptions = ["my homework 📝", "my phone 📱", "the car 🚗", "the internet router 📡"];
const whenOptions = ["yesterday", "last night", "two days ago", "this morning"];

// Compatibility rules to avoid unrealistic excuses.
// Each "who" has a list of verbs that make sense for that subject.
const allowedVerbsByWho = {
  "My dog 🐶": ["ate", "destroyed", "broke"],
  "My grandmother 👵": ["broke", "destroyed", "ate"],
  "The neighbor 🧑": ["stole", "broke", "destroyed"],
  "A police officer 👮": ["broke", "destroyed"]
};

// Each verb has objects/situations that are more believable.
const allowedObjectsByVerb = {
  destroyed: ["my homework 📝", "my phone 📱", "the internet router 📡"],
  stole: ["my phone 📱", "the car 🚗"],
  ate: ["my homework 📝"],
  broke: ["my phone 📱", "the car 🚗", "the internet router 📡"]
};

// Get the button and text container from the HTML.
const generateExcuseButton = document.getElementById("generate-excuse-button");
const excuseText = document.getElementById("excuse-text");

// This function returns one random element from an array.
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Build one complete excuse sentence using random values.
function generateExcuse() {
  const who = getRandomItem(whoOptions);

  // Pick a verb compatible with the selected subject.
  const compatibleVerbs = allowedVerbsByWho[who] || actionVerbOptions;
  const actionVerb = getRandomItem(compatibleVerbs);

  // Pick an object/situation compatible with the selected verb.
  const compatibleObjects = allowedObjectsByVerb[actionVerb] || whatHappenedOptions;
  const whatHappened = getRandomItem(compatibleObjects);

  const when = getRandomItem(whenOptions);

  return who + " " + actionVerb + " " + whatHappened + " " + when + ".";
}

// Show a newly generated excuse in the text container.
function showNewExcuse() {
  const newExcuse = generateExcuse();
  excuseText.textContent = newExcuse;
}

// Generate an excuse when the user clicks the button.
generateExcuseButton.addEventListener("click", showNewExcuse);

// Generate one excuse automatically when the page loads.
showNewExcuse();
