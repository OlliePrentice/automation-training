require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");

const webpage = async () => {
    const driver = new Builder().forBrowser("chrome").build();

    await driver.get("https://sky.com");

    try {
        const noticeFrame = await driver.findElement(
            By.xpath("//*[@id='sp_message_iframe_474555']")
        );

        await driver.switchTo().frame(noticeFrame);

        let noticeAgree = await driver.findElement(
            By.xpath("//*[@id='notice']/div[3]/button[2]")
        );

        await noticeAgree.click();

        await driver.switchTo().defaultContent();

        let searchToggle = await driver.findElement(
            By.xpath("//*[@id='masthead-search-toggle']")
        );

        await searchToggle.click();

        let searchInput = await driver.findElement(
            By.xpath(
                "//*[@id='masthead-navigation']/div/div[1]/div[2]/div/div/div/div/div/div/div/input"
            )
        );

        await new Promise((resolve) => {
            setTimeout(async () => {
                await searchInput.sendKeys("Mobile");

                resolve();
            }, 1000);
        });

        await new Promise((resolve) => {
            setTimeout(async () => {
                await searchInput.sendKeys(Key.RETURN);

                resolve();
            }, 1000);
        });
    } catch (error) {
        console.log(error);
    }
};

webpage();
