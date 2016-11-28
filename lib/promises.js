'use strict';

const Promise = require('bluebird');

const readFile = Promise.promisify(require('fs').readFile);

let ipsums = '';

module.exports = function(callback) {

  readFile(`${__dirname}/../data/catipsum.txt`)
  .then( data => {
    ipsums += data.toString('hex', 0, 8);
    ipsums += ' catipsum';
    ipsums  += '\n';
  })
  .then( () => {
    readFile(`${__dirname}/../data/cupcakeipsum.txt`)
    .then( data => {
      ipsums += data.toString('hex', 0, 8);
      ipsums += ' cupcakeipsum';
      ipsums  += '\n';
    })
  .then( () => {
    readFile(`${__dirname}/../data/samuelipsum.txt`)
    .then( data => {
      ipsums += data.toString('hex', 0, 8);
      ipsums += ' samuelipsum';
      ipsums  += '\n';
      callback(ipsums);
    });
  });
  });
};
