'use strict';

const fs = require('fs');


module.exports = function(callback) {
  let ipsums = '';

  fs.readFile(`${__dirname}/../data/catipsum.txt`, (err, data) => {
    if(err) throw new Error('catipsum did not read correctly');
    ipsums += data.toString('hex', 0, 8);
    ipsums += ' catipsum';
    ipsums  += '\n';

    fs.readFile(`${__dirname}/../data/cupcakeipsum.txt`, (err, data) => {
      if(err) throw new Error('cupcakeipsum did not read correctly');
      ipsums += data.toString('hex', 0, 8);
      ipsums += ' cupcakeipsum';
      ipsums  += '\n';

      fs.readFile(`${__dirname}/../data/samuelipsum.txt`, (err, data) => {
        if(err) throw new Error('samuelipsum did not read correctly');
        ipsums += data.toString('hex', 0, 8);
        ipsums += ' samuelipsum';
        callback(ipsums);
      });
    });
  });
};
