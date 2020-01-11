const puppeteer = require("puppeteer"); // its a headless browser

async function scrapeProduct(url) {
  const browser = await puppeteer.launch(); // launching browser
  const page = await browser.newPage(); // Adding Blank Page
  await page.goto(url); // Going to URL

  const [el] = await page.$x("/html/body/div/div/table/thead/tr/th[2]"); // Adding Full XPATh for Scrapping
  const text = await el.getProperty("textContent");
  const rawText = await text.jsonValue();

  const [el1] = await page.$x("/html/body/div/div/form/div[1]/div[1]/input"); // Adding Full XPATh for Scrapping
  const text1 = await el1.getProperty("placeholder");
  const rawText1 = await text1.jsonValue();

  console.log({ rawText, rawText1 });
}

scrapeProduct("https://twitter-client-a9e76.firebaseapp.com/");
