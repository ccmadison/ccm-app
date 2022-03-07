const API_KEY = 'AIzaSyBjupqRl_EYuDuUuQCyCNIw3o1DXNno64o';
const API_PARAMS = {
  apiKey: API_KEY,
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
}
const SHEETS_PARAMS = {
  spreadsheetId: '1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8',
  range: 'Agenda'
}

function createAgenda() {
  console.log(`Module loaded`);
  gapi.client.init(API_PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(SHEETS_PARAMS);
  }).then(response => {
    return import('./buildAgendaList').then(({ default: buildAgendaList }) => buildAgendaList(response));
  }).then(() => {
    return import('./agenda').then(({ default: agenda }) => agenda());
  }, err => {
    console.error(`Error using Google API: ${err}`, err);
  })
}

export default createAgenda;