const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://example.com'
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36';
  const page = await browser.newPage();
  page.setUserAgent(userAgent);

  await page.goto(url, { timeout: 600000, waitUntil: 'networkidle0' });
  const pageTitle = await page.$eval('body div h1', ( element: Element ) => element.textContent)

  console.log(pageTitle)

  await browser.close();
}) ();
