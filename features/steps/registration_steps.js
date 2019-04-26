const chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var registrationPage1 = require("../pages/registerPage.js");
const {Given} = require('cucumber');

var {defineSupportCode} = require('cucumber');


this.World = function MyWorld() {
  this.page = new registrationPage();
};

defineSupportCode(({Given, When, Then}) => {

Given('I\'m a student', function () {
  //this.site();
  registrationPage1.site();
  //callback();
});

});



