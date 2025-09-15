exports.waitForAndClick = async (page, selector) => {
    await page.waitForSelector(selector, { state: 'visible' });
    await page.click(selector);
  };  