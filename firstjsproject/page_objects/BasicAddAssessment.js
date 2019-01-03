var webdriver = require('selenium-webdriver');
const action= require('./Action');

describe('Login into Sapling Learning Using Instructor',async function(){

    before(function(){
        action.initBrowser();
    });

    it('Launch Url',async function(){
      this.timeout(240000);
      await action.launchApp();
    });

    it('Enter crendentials',async function(){
        this.timeout(240000);
       await action.enterCredentials();
    });

    it('Should verify that User logged in successfully',async function(){
        this.timeout(240000);
        await action.verifyLoginStatus();
    });
  });

  describe('Open Course',async function(){
      it('Click to particular course',async function(){
        this.timeout(240000);
        await action.clickToOpenCourse();
      });

      it('Should verify that course get launched up',async function(){
        this.timeout(240000);
        await action.verifyCourseLaunched();
      });
  });

  describe('Create new Assessment',async function(){
      it('Click to Add an Activity',async function(){
        this.timeout(240000);
        await action.clickToAddActivity();
      });

      it('Should able to provide new Assessment Name',async function(){
        this.timeout(240000);
        await action.provideAssessmentName();
        await action.clickToSaveAndContinue();
      });

      it('Should verify that assessment gets created',async function(){
          await action.verifyAssessmentCreated();
      })
  });
