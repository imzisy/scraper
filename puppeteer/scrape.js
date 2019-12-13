const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });

  await page.goto(
    "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=MYR",
    { waitUntil: ["domcontentloaded", "networkidle0"] }
  );
  const resultsSelector = ".converterresult-toAmount";
  amount = await page.waitForSelector(resultsSelector);
  const myrToUsd = await page.$eval(resultsSelector, element => {
    return element.innerHTML;
  });

  await page.goto(
    "https://www.xe.com/currencyconverter/convert/?Amount=1&From=EUR&To=MYR",
    { waitUntil: ["domcontentloaded", "networkidle0"] }
  );
  amount = await page.waitForSelector(resultsSelector);

  const myrToEur = await page.$eval(resultsSelector, element => {
    return element.innerHTML;
  });
  await page.goto(
    "https://www.xe.com/currencyconverter/convert/?Amount=1&From=SGD&To=MYR",
    { waitUntil: ["domcontentloaded", "networkidle0"] }
  );

  amount = await page.waitForSelector(resultsSelector);

  const myrToSgd = await page.$eval(resultsSelector, element => {
    return element.innerHTML;
  });


  await page.goto("https://petrolpricemalaysia.info/");

  const petrolPrice = await page.evaluate(() => {
    let petrolprice = document.querySelector(".rpt_price_0").innerText;
    let petrolprice2 = document.querySelector(".rpt_price_1").innerText;
    let petrolprice3 = document.querySelector(".rpt_price_2").innerText;
    return {
      petrol95: petrolprice.replace("RM", ""),
      petrol97: petrolprice2.replace("RM", ""),
      diesel: petrolprice3.replace("RM", "")
    };
  });

  await page.goto("http://goldpricez.com/my/gram", {
    waitUntil: ["domcontentloaded", "networkidle0"]
  });
  const resultsSelectorGold = ".display_rates";

  await page.waitForSelector(resultsSelectorGold);

  const goldPrices = await page.evaluate(resultsSelectorGold => {
    const rows = Array.from(document.querySelectorAll(resultsSelectorGold));
    return rows.map(row => {
      const result = row.textContent.split("|")[0].trim();
      return result;
    });
  }, resultsSelectorGold);

  let goldBid = goldPrices[0].split("\n")[1].trim();
  let array2 = goldPrices[2].split("\n");
  let goldAsk = array2[5].split(": ")[1].replace("MYR", "");

  let result = {
    currency: {
      myrToSgd : parseFloat(myrToSgd).toFixed(2),
      myrToEur : parseFloat(myrToEur).toFixed(2),
      myrToUsd : parseFloat(myrToUsd).toFixed(2)
    },
    goldPrice: {
      goldChange : Math.round((parseFloat(goldAsk) - parseFloat(goldBid)) * 100) / 100,
      goldAsk : goldAsk,
      goldBid : goldBid
    },
    petrolPrice
  };
  var json = JSON.stringify(result);

  //   await fs.writeFile('myjsonfile.json', json, 'utf8');

  fs.writeFile("./puppeteer/result.json", json, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  await page.close();
  await browser.close();
})();
