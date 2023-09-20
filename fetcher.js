//Import request
const request = require('request');

//Import fs
const fs = require('fs');

//Receive arguments from command line and assign them to variables
const args = process.argv.slice(2);
const URL = args[0];
const LFP = args[1];
const writeFile = function(filepath, html, callback) {
  fs.writeFile(filepath, html, callback);
};

//Make http call
const makeRequest = (callback) => request(URL, function(error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  callback(body);
});

const requestResponse = function() {
  makeRequest((html) => {
    writeFile(LFP, html, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded and saved ${html.length} bytes to ${LFP}`);
    });
  });

};

requestResponse();





