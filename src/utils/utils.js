const R = require('rambda');

module.exports = {
  noExtension(fileName) {
    R.split(".", fileName);
  }
};