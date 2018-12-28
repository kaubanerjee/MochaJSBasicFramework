var webdriver = require('selenium-webdriver');
var chai = require('chai');
var assert = chai.assert;
var driver;
var gettitle= function(){
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(20);
      assert.equal(driver.gettitle(),'QA Infotech');
    }, 2000);
  });
}

describe('Test 1',function(){

  before(()=>{
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
  })
  
  it('Launch Url',async function(){
    driver.get('http://webmail.qainfotech.com');
    const title= gettitle();
    console.log(await title);
  }); 
});

describe('Test 2',function(){
  it('Should able to enter username',async function(){
    var username=await driver.findElement(webdriver.By.css('#username'));
    username.click();
    username.sendKeys('kaushikbanerjee@qainfotech.com');
  });

});
  
  describe('Test 3',function(){
    it('Should able to enter password',async function(){
      var password=await driver.findElement(webdriver.By.css('#password'));
      password.click();
      password.sendKeys('Enter Your Password');
    });
  });

    describe('Test 4',function(){
       it('Should able to sigin',async function(){
    var siginBtn=await driver.findElement(webdriver.By.css('.ZLoginButton.DwtButton'));
    siginBtn.click();
  });
  });