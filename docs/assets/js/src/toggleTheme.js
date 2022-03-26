const TOGGLER = document.getElementById('themeToggle');
const LIGHT_MODE = 'light_mode'; // Light mode icon from the material icons Google Font. See <https://fonts.google.com/icons> for more details
const DARK_MODE = 'dark_mode'; // Dark mode icon from material icons
const DARK_MODE_CLASS = 'dark-mode'; // Custom class for activating dark-mode styling. Styles defined in /assets/scss/2-modules/_dark-mode.scss
const ICON = document.querySelector('#themeToggle .material-icons'); // `.material-icons` class is from Google's material icons font
const html = document.querySelector('html');

function changeStorageSetting(darkThemeBoolean) {
  const darkModeSetting = darkThemeBoolean == true ? 'true' : 'false'

  window.localStorage.setItem('darkModeThemeSetting', darkModeSetting);
}

function toggleThemeMode(icon, darkModeWasAlreadySetBoolean) {
  if (darkModeWasAlreadySetBoolean) {
    import('../../scss/dark-mode.scss');
  }
  if (icon.innerHTML == DARK_MODE) {
    icon.innerHTML = LIGHT_MODE;
    html.classList.add(DARK_MODE_CLASS);
    changeStorageSetting(true);
  } else {
    icon.innerHTML = DARK_MODE;
    html.classList.remove(DARK_MODE_CLASS);
    changeStorageSetting(false);
  }
}

function toggleTheme() {
  if (window.localStorage.getItem('darkModeThemeSetting') === 'true') {
    // If the correct localStorage item is set toggle the dark-mode on right away.
    toggleThemeMode(ICON, true);
  }
  TOGGLER.addEventListener('click', (e) => {
    toggleThemeMode(ICON, false);
  });
}

export default toggleTheme;