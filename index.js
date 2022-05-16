require("chromedriver");
const { Builder, By, until } = require("selenium-webdriver");

const webpage = async () => {
    const driver = new Builder().forBrowser("chrome").build();

    await driver.get("https://sky.com");

    try {
        const noticeFrame = await driver.findElement(
            By.xpath("//*[@id='sp_message_iframe_474555']")
        );

        await driver.switchTo().frame(noticeFrame);

        let button = await driver.findElement(
            By.xpath("//*[@id='notice']/div[3]/button[2]")
        );

        await button.click();
    } catch (error) {
        console.log(error);
    }
};

webpage();
