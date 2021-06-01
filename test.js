import puppeteer from 'puppeteer'
import dappeteer from '@schmid.digital/dappeteer'

async function main() {
  const browser = await dappeteer.launch(puppeteer)
  const metamask = await dappeteer.getMetamask(browser)

  // create or import an account
  // await metamask.createAccount()
  await metamask.importAccount('already turtle birth enroll since...')

  // you can change the network if you want
  //await metamask.switchNetwork('ropsten')
  await metamask.switchNetwork('rinkeby')

  // go to a dapp and do something that prompts MetaMask to confirm a transaction
  const page = await browser.newPage()
  await page.goto('http://my-dapp.com')
  const payButton = await page.$('#pay-with-eth')
  await payButton.click()

  // 🏌
  await metamask.confirmTransaction()
}

main()