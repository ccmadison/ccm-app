// Google API/Sheets API configuration
const CLIENT_ID = '265176809583-8thlsbb3omdbpp4iotefd4bnrnlnoetj.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBjupqRl_EYuDuUuQCyCNIw3o1DXNno64o';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
const CLIENT_PARAMS = {
  apiKey: API_KEY,
  clientId: CLIENT_ID,
  discoveryDocs: DISCOVERY_DOCS,
  scope: SCOPES
}
const SHEETS_PARAMS = {
  spreadsheetId: '1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8',
  range: 'Agenda'
}
// Elements already in the page HTML
const PARENT = document.getElementById('Agenda'); // Parent element for injecting the table/agenda HTML
const AUTHORIZE_BTN = document.getElementById('authorize_button');
const SIGNOUT_BTN = document.getElementById('signout_button');

// This function is run only after a successful authorization
function getValues() {
  Promise.resolve()
    .then(() => {
      // 1.) First create a temporary loader/spinner
      PARENT.innerHTML = '';
      PARENT.innerHTML = `<div class="text-center my-5 py-5">
  <img src="./assets/img/loader.min.svg" class="img-fluid loader loader--animate" alt="Loading...">
</div>`;
    })
    .then(() => {
      // 2.) Next, fetch the values from the spreadsheet
      return gapi.client.sheets.spreadsheets.values.get(SHEETS_PARAMS)
    }) 
    .then(response => {
      // 3.) Do something with the successful Sheets API response object here - like build a table
      return import('./buildAgendaList').then(({ default: build }) => build(response))
    }).then(() => {
      // 4.) Now that everything is built we can start adding the functionality
      return import('./watchForTimeSlotClicks')
        .then(({ default: watchForTimeSlotClicks }) => watchForTimeSlotClicks())
    })
    .catch(err => console.error(`Error getting spreadsheet values: ${err.message}`, err))
}

function updateSignInButtons(isSignedIn, callback) {
  if (isSignedIn) {
    AUTHORIZE_BTN.style.display = 'none';
    SIGNOUT_BTN.style.display = 'inline-block';
    return callback();
  } else {
    AUTHORIZE_BTN.style.display = 'inline-block';
    SIGNOUT_BTN.style.display = 'none';
  }
}

function initClient() {
  gapi.client.init(CLIENT_PARAMS).then(() => {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInButtons);

    // Handle the initial sign-in state.
    updateSignInButtons(gapi.auth2.getAuthInstance().isSignedIn.get(), getValues);
    AUTHORIZE_BTN.onclick = (e) => gapi.auth2.getAuthInstance().signIn();
    SIGNOUT_BTN.onclick = (e) => gapi.auth2.getAuthInstance().signOut();
  }, err => console.error(`Error initializing gapi client: ${err.message}`, err))
}

function createAgenda() {
  gapi.load('client:auth2', initClient);
}

export default createAgenda;