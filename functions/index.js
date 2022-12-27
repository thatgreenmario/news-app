
const fetch = require('node-fetch');
const functions = require("firebase-functions");

 // Create and deploy your first functions
 // https://firebase.google.com/docs/functions/get-started

 exports.topics = functions.https.onRequest(async (request, response) => {
   const response1 = await fetch('https://brutalist.report/api/v1/topics');
   const data = await response1.json();
   response.set('Access-Control-Allow-Origin', '*');
   response.send(data);
 });
/* const functions = require('firebase-functions'); */

/* exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
}); */