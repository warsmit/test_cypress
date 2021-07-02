describe("Test", () => {
  const puppeteer = require('puppeteer');
  var browser;

  test('test', async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      args: [
        `--no-sandbox`,
        `--disable-setuid-sandbox`
      ],
      executablePath: process.env.PUPPETEER_EXEC_PATH,
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Switch/56011600', { waitUntil: 'networkidle2' })
    await page.screenshot({ path: './image.jpg' })
    console.log('See screen shot: ' + './image.jpg')
    await page.click('button.prod-ProductCTA--primary')
    await page.waitForSelector('.Cart-PACModal-ItemInfoContainer')
    await page.screenshot({ path: './image1.jpg' })
    console.log('See screen shot: ' + './image1.jpg')
  }, 60000);

  test('Close browser', async () => {
    await browser.close();
  }, 60000);
});
