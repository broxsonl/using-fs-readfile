'use strict';

const callbackMethod = require('./lib/callback.js');

callbackMethod(printIt);


function printIt(data) {
  console.log(data);
}
