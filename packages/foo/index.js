'use strict';

const outdent = require('outdent');
const bar = require('@bholloway/bar');
const baz = require('@bholloway/baz');

const {name, version} = require('./package.json');
console.log(outdent`
  ${name}@${version}
    - ${bar()}
    - ${baz()}
  `
);
