var webdriver = require('selenium-webdriver');
var chai = require('chai');
var assert = chai.assert;
var driver,username,password,siginBtn,logo;
var gettitle= function(){
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(20);
      assert.equal(driver.gettitle(),'QA Infotech');
    }, 2000);
  });
}

describe('Test 1',async function(){

  before(()=>{
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
  })
  
  it('Launch Url',async function(){
    this.timeout(240000);
    driver.get('http://webmail.qainfotech.com');
    //const title= gettitle();
    //console.log(await driver.gettitle());
  }); 
});

describe('Test 2',async function(){
  it('Should able to enter username',async function(){
    this.timeout(240000);
    username = await driver.findElement(webdriver.By.css('#username'));
    await username.click();
    await username.sendKeys('kaushikbanerjee@qainfotech.com');
  });

});
  
  describe('Test 3',async function(){
    it('Should able to enter password',async function(){
      this.timeout(240000);
      password=await driver.findElement(webdriver.By.css('#password'));
      await password.click();
      await password.sendKeys('Kaushik@93');
    });
  });

    describe('Test 4',async function(){
       it('Should able to sigin',async function(){
        this.timeout(240000);
    siginBtn=await driver.findElement(webdriver.By.css('.ZLoginButton.DwtButton'));
    await siginBtn.click();
  });
  });

  describe('Test 5',async function(){
    it('Should verify company logo',async function(){
      this.timeout(280000);
      logo=await driver.findElement(webdriver.By.css('.ImgAppBanner'));
    });
  });