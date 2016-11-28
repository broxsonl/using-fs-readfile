'use strict';

const callbackMethod = require('./lib/callback.js');
const promiseMethod = require('./lib/promises.js');

callbackMethod(printIt);
promiseMethod(printIt);


function printIt(data) {
  console.log(data);
}
