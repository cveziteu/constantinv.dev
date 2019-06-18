function myChangeThemeFunction(clickedId) {
  var myThemes = ["theme-default", "theme-image", "theme-teal", "theme-brown"];
  var currentTheme = "";

  if (clickedId == "themeDefault") {
    currentTheme = "theme-default";
  }
  else if (clickedId == "themeTeal") {
      currentTheme = "theme-teal";
  }
  else if (clickedId == "themeBrown") {
      currentTheme = "theme-brown";
  }
  else if (clickedId == "themeImage") {
      currentTheme = "theme-image";
  }
  console.log(currentTheme + " - requested!");

  // var x = document.getElementsByTagName("BODY")[0];
  // alert(x);
  if (!document.getElementsByTagName("body")[0].classList.contains(currentTheme) ||
      !document.getElementsByTagName("span")[0].classList.contains(currentTheme) ||
      !document.getElementsByTagName("img")[0].classList.contains(currentTheme)) {

        for(var i = 0; i <= myThemes.length; i++) {
          document.getElementsByTagName("body")[0].classList.remove(myThemes[i]);
          document.getElementsByTagName("span")[0].classList.remove(myThemes[i]);
          document.getElementsByTagName("img")[0].classList.remove(myThemes[i])
        }
        document.getElementsByTagName("body")[0].classList.add(currentTheme);
        document.getElementsByTagName("span")[0].classList.add(currentTheme);
        document.getElementsByTagName("img")[0].classList.add(currentTheme);
  }
}
