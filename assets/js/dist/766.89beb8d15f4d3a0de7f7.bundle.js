"use strict";(self.webpackChunkccm_app=self.webpackChunkccm_app||[]).push([[766],{8766:function(e,n,t){t.r(n),t(1539),t(8674),t(6992),t(3948),t(8783);var i=document.getElementById("Agenda"),o={apiKey:"AIzaSyBjupqRl_EYuDuUuQCyCNIw3o1DXNno64o",clientId:"265176809583-8thlsbb3omdbpp4iotefd4bnrnlnoetj.apps.googleusercontent.com",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"},s={spreadsheetId:"1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8",range:"Agenda"},a=document.getElementById("authorize_button"),c=document.getElementById("signout_button");function u(){Promise.resolve().then((function(){i.innerHTML="",i.innerHTML='<div class="text-center my-5 py-5">\n  <img src="./assets/img/loader.min.svg" class="img-fluid loader loader--animate" alt="Loading...">\n</div>'})).then((function(){return gapi.client.sheets.spreadsheets.values.get(s)})).then((function(e){return t.e(835).then(t.bind(t,4835)).then((function(n){return(0,n.default)(e)}))})).then((function(){return t.e(869).then(t.bind(t,5869)).then((function(e){return(0,e.default)()}))})).catch((function(e){return console.error("Error getting spreadsheet values: ".concat(e.message),e)}))}function r(e,n){if(e)return a.style.display="none",c.style.display="inline-block",n();a.style.display="inline-block",c.style.display="none"}function l(){gapi.client.init(o).then((function(){gapi.auth2.getAuthInstance().isSignedIn.listen(r),r(gapi.auth2.getAuthInstance().isSignedIn.get(),u),a.onclick=function(e){return gapi.auth2.getAuthInstance().signIn()},c.onclick=function(e){return gapi.auth2.getAuthInstance().signOut()}}),(function(e){return console.error("Error initializing gapi client: ".concat(e.message),e)}))}n.default=function(){gapi.load("client:auth2",l)}}}]);