const puppeteer = require('puppeteer');
const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

var videos = new JsonDB(new Config("tiktok-fyp-videos", true, false, '/'));

async function saveVideo(videodata){
    try {
        var data = await videos.getData("/"+videodata.id)
        console.log(videodata.id + " already in DB")
    } catch(error) {
        console.log(videodata.id + " not yet in DB")
        await videos.push("/"+videodata.id, videodata)
    }    
}

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
      if (response.url().indexOf("api/recommend/item_list") > 0){   
        response.json().then((data) => {
            data.itemList.forEach( async (el,c) => {
              saveVideo(el)
          }) 
        })
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
    saveVideo(initinfo.ItemModule[el]) 
  }) 

  while (true) {
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
  }
}
run();


