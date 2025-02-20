const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto(
    "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case"
  );

  // Extrai os dados brutos do gráfico
  const dados = await page.evaluate(() => {
    const script = Array.from(document.querySelectorAll("script")).find((el) =>
      el.textContent.includes("var line1=")
    );
    if (!script) return null;

    // Captura os arrays de dados do script
    const scriptText = script.textContent;
    const match = scriptText.match(/var line1=\[\[(.*?)\]\]/s);
    return match ? match[0].replace("var line1=", "") : null;
  });

  // Converte para JSON
  const parsedData = JSON.parse(dados);
  console.log("Dados do gráfico:", parsedData);

  // await browser.close();
})();
