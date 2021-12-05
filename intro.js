const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://collegedunia.com/university/26008-jadavpur-university-ju-kolkata/courses-fees");
  const result = await page.evaluate(() => {
    let courses = document.querySelectorAll('th[class = "jsx-2675951502"]').innerText;
    return courses;

  });

  console.log(result);
  await browser.close();
})();