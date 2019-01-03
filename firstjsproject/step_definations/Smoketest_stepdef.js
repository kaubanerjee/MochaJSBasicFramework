const { Before, Given, When, Then } = require('cucumber')
const action= require('../Action');
var webdriver = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');

Given('User launches NGA login page in a browser', async function () {
  await action.initBrowser();
  setDefaultTimeout(60 * 1000);
  await action.launchApp();
});

When('Submits valid raptoradmin and fasterthansixmill',async function () {
  await action.enterCredentials();
});

Then('User should be logged into the application',async function () {
  await action.verifyLoginStatus();
});

When('User searches for the required course', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('Selects the searched course', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User is navigated to the course home page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User selects add an activity link', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('Click on Save and Continue after entering info in the {string} page', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User should land on assignment tab of newly created course', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User selects Question Bank tab', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('Add few items to the assignment', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the items should be added successfully to the assignment', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User selects Assignment tab', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('Select Assignment Preview option', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('user should be navigated to SAC page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('all the questions present in the assignment should be displayed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('User navigates back to the course home page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('select delete option to delete the newly added course', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the course should no longer be displayed on course home page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});