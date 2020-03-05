class SettingBrowserPage {
    constructor() {

         this.settingupbrowserid = element(by.id('setting-up-the-browser'));
        this.mobilesetuplink = element(by.linkText('Mobile Setup'));
        //this.drop1Link = element(by.id('drop1'));
        this.driverlink = element(by.linkText('drivers'));
       // this.drop2Link = element(by.id('drop2'));
       // this.settingUpProtractorLink = element(by.linkText('Setting Up Protractor'));
       // this.settingUpTheSeleniumServerLink = element(by.linkText('Setting Up the Selenium Server'));
       // this.settingUpTheBrowserLink = element(by.linkText('Setting Up the Browser'));
       // this.settingUpTheBrowserLink = element(by.xpath("//a[@href='#/browser-setup']"));
       // this.choosingAFrameworkLink = element(by.linkText('Choosing a Framework'));
       // this.drop3Link = element(by.id('drop3'));
       // this.fAQLink = element(by.linkText('FAQ'));

    }

}
module.exports = new SettingBrowserPage();