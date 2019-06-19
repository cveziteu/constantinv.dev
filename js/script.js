// All theme names go to this array:
var myThemes = ["theme-default", "theme-image", "theme-teal", "theme-brown"];

// Ids of the <li> elements
// Ids should be in the same order as theme names above!
// E.g. "theme-default" from "myThemes" array should be on the same position with "themeDefault" in "myIds" array
var myIds = ["themeDefault", "themeImage", "themeTeal", "themeBrown"];

// All html elements that are affected by the theme change
var myElements = ["body", "span", "img"];

// Initialization of the selected theme variable.
var selectedTheme = "";


// Check if the theme is already applied to all elements.
function checkElementsTheme(selectedTheme) {
  for (var i = 0; i < myElements.length; i++) {
    if (!document.getElementsByTagName(myElements[i])[0].classList.contains(selectedTheme)) {
      return false;
    }
  }
  return true;
}

// Remove all "theme" classes from the elements.
function removeClasses() {
  for (var i = 0; i < myThemes.length; i++) {
    for (var j = 0; j < myElements.length; j++) {
      document.getElementsByTagName(myElements[j])[0].classList.remove(myThemes[i]);
    }
  }
}

// Add the theme class to all elements.
function addClasses(selectedTheme) {
  for (var j = 0; j < myElements.length; j++) {
    document.getElementsByTagName(myElements[j])[0].classList.add(selectedTheme);
  }
}


// Main function
function ChangeTheme(clickedId) {

  for (var i = 0; i < myThemes.length; i++) {
    if (clickedId ==  myIds[i]) {
      selectedTheme = myThemes[i];
    }
  }

  if (!checkElementsTheme(selectedTheme)) {
      console.log(selectedTheme + " - requested!");
      removeClasses();
      addClasses(selectedTheme);
  }
}
