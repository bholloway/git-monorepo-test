'use strict';

module.exports = () => {
  const {name, version} = require('./package.json');
  return `${name}@${version}`;
};
