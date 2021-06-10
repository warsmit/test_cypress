import puppeteer from 'puppeteer'
import dappeteer from '@schmid.digital/dappeteer'

async function main() {
  // const browser = await dappeteer.launch(puppeteer, {
  //   headless:false,
  //   args: ["--no-sandbox"]
  // })
  const browser = await dappeteer.launch(puppeteer, {
    //ignoreDefaultArgs: ['--disable-extensions'],
    headless: false,
    executablePath: '.\\node_modules\\puppeteer',
    args: [
      // '--no-sandbox', 
      // '--disable-setuid-sandbox',
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
    ],
  })

  //const browser = await dappeteer.launch(puppeteer)
  const metamask = await dappeteer.getMetamask(browser)
  await browser.close()
  // create or import an account
  // await metamask.createAccount()
  await metamask.importAccount('already turtle birth enroll since...')
  await browser.close()
  // you can change the network if you want
  //await metamask.switchNetwork('ropsten')
  await metamask.switchNetwork('rinkeby')

  const page = await browser.newPage()
  await page.goto('http://my-dapp.com')
  const payButton = await page.$('#pay-with-eth')
  await payButton.click()

  await metamask.confirmTransaction()
  await browser.close()
}

main()