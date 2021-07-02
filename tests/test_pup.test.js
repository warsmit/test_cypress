describe("Test", () => {
  const puppeteer = require('puppeteer');

  test('test', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 10,
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Switch/56011600', { waitUntil: 'networkidle2' })
    await page.click('button.prod-ProductCTA--primary')
    await page.waitForSelector('.Cart-PACModal-ItemInfoContainer')
    await page.screenshot({ path: screenshot })
    await browser.close()
    console.log('See screen shot: ' + screenshot)
  }, 60000);
});
