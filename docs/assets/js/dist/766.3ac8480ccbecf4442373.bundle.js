"use strict";(self.webpackChunkccm_app=self.webpackChunkccm_app||[]).push([[766],{8766:function(e,n,t){t.r(n),t(6992),t(1539),t(3948),t(8674),t(8783);var o={apiKey:"AIzaSyBjupqRl_EYuDuUuQCyCNIw3o1DXNno64o",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},u={spreadsheetId:"1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8",range:"Agenda"};n.default=function(){console.log("Module loaded"),gapi.client.init(o).then((function(){return gapi.client.sheets.spreadsheets.values.get(u)})).then((function(e){return t.e(835).then(t.bind(t,4835)).then((function(n){return(0,n.default)(e)}))})).then((function(){return t.e(317).then(t.bind(t,6317)).then((function(e){return(0,e.default)()}))}),(function(e){console.error("Error using Google API: ".concat(e),e)}))}}}]);