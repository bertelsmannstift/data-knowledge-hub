//const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer'
videos = []
console.log(puppeteer)
async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless:false, 
    defaultViewport: null,
    args: ["--window-size=1920,1080"]
  });
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on('request', (request) => request.continue())
  page.on('response', response => {
    try {
      if (response.url().indexOf("api/recommend/item_list/item_list") > 0){   
        response.json().then((data) => {
            data.itemList.forEach( async (el,c) => {
              videos.push({id:el.id})
          }) 
        })
        console.log("Received Video Data. Seen " + videos.length + " so far")         
      }
    } catch(e) {
      console.log(e);
    }
  });

  await page.goto('https://tiktok.com/foryou');

  let logindialog = await page.$('div[data-e2e="modal-close-inner-button"]')
  await logindialog.click(page, 'div[data-e2e="modal-close-inner-button"]');
  const sigistate = await page.$eval('#SIGI_STATE', el => el.innerHTML);
  initinfo = JSON.parse(sigistate)
  
  Object.keys(initinfo.ItemModule).forEach( async (el,c) => {
    videos.push(initinfo.ItemModule[el])
  }) 
  while (true) {
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
  }
}
// run();


