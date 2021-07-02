describe("Test", () => {
  const puppeteer = require('puppeteer');
  const dappeteer = require('@schmid.digital/dappeteer');
  var browser;
  var metamask;

  test('Account connect to MetaMask extention', async () => {
    browser = await dappeteer.launch(puppeteer, {
      headless: false,
      slowMo: 5,
    })
    const metamaskOptions = {
      seed: 'cover rival figure blast opinion catalog weather share sorry surround spin scene',
      password: '@Ntcnvtnfvfc1',
    }
    metamask = await dappeteer.getMetamask(browser, metamaskOptions)
    await metamask.switchNetwork('rinkeby')
  }, 60000);

  test('Choise account and connect zkSync', async () => {
    var tempPage = await browser.newPage()
    await tempPage.goto('https://www.google.com/')

    var pages = await browser.pages();
    var test_page = pages.find(e => e.url().match("chrome-extension://[a-z]+/home.html"))
    //const url = await pages[1].url();
    console.log(test_page.url())
    await browser.close();
  }, 60000);
});
