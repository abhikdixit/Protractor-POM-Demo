var homePage = require('../Pages/homePage');
var settingUpBrowser = require('../Pages/setting_up_browser');
var testdata = require('../Testdata/data.json');
const EC = protractor.ExpectedConditions;

describe('Check the https://www.protractortest.org/ main page Home and Tutorial links', function () {

  it('HomePageTest 1 .1 - It should navigate to home page! check Tutorial page and go back to Home page', function () {
    //Given
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(testdata.environment);
    browser.sleep(6000);

    //Read titile
    expect(browser.getTitle()).toEqual("Protractor - end-to-end testing for AngularJS");
    console.log("title verified");
    //Read text of drop down
    expect(homePage.homeLink.getText()).toEqual("Home");

    //Then click on Protractor Setup Link
    homePage.drop2Link.click();
       browser.sleep(3000);
    //Then click on Setting Up the Browser Link
    homePage.settingUpTheBrowserLink.click();
           browser.sleep(3000);
    //Verify Use is on Setting Up the Browser Link
    expect(settingUpBrowser.settingupbrowserid.getText()).toEqual("Setting Up the Browser");
    //Then click on driver Link
    settingUpBrowser.driverlink.click();
               browser.sleep(3000);
        //Then user Navigate back to previous page
               browser.navigate().back();
            //Then Verify use back to Home page
    browser.wait(EC.visibilityOf(homePage.homeLink), 10000);
    //Then
    homePage.homeLink.click();
    console.log("Clicked on Home Link")
    browser.wait(EC.visibilityOf(homePage.homeLink), 10000);
  });

});