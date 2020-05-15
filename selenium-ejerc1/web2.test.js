const { Builder, By, Key, until } = require('selenium-webdriver');

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
})

afterEach(async () => {
    if (driver) {
        await driver.quit();
    }
});

test('Google shows search term in title', async () => {

    await driver.get('http://localhost:8080/');
    await driver.findElement(By.tagName('input')).sendKeys(inputTest);
    await driver.findElement(By.tagName('button')).click();


})