const React16 = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');

Enzyme.configure({ adapter: new React16() });

require('@babel/polyfill');
