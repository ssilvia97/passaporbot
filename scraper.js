import puppeteer from 'puppeteer';

export async function waitForAvailability() {

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();

    page.setViewport({ width: 1920, height: 1080 })
    // Navigate the page to a URL
    await page.goto('https://passaportonline.poliziadistato.it/cittadino/n/sc/loginCittadino/sceltaLogin');

    await page.waitForSelector('app-elenco-appuntamento-cittadino', { timeout: 120000 })

    await page.goto('https://passaportonline.poliziadistato.it/cittadino/a/sc/wizardAppuntamentoCittadino/sceltaComune');

    let lock_count;

    do {

        await page.waitForSelector('.fas.fa-lock', { timeout: 120000 })

        const locks = await page.$$('.fas.fa-lock');

        lock_count = locks.length;

        if (lock_count < 2) {
            break;
        }

        await new Promise((resolve) => setTimeout(resolve, 60000));

        await page.reload();

    } while (lock_count === 2)

}
