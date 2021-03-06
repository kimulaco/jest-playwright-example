const playwright = require('playwright')
const browserTypes = ['chromium', 'firefox', 'webkit']

for (const browserType of browserTypes) {
  describe(`Test by ${browserType}`, () => {
    let browser
    let page

    beforeAll(async () => {
      browser = await playwright[browserType].launch()
      const context = await browser.newContext()
      page = await context.newPage()
      await page.goto('http://localhost:3000')
    })

    test('Show nice click', async () => {
      await page.click('#btn');
      const renderdText = await page.evaluate(async () => {
        return document.getElementById('text').innerText
      })
      expect(renderdText).toBe('Nice click!')
    })

    afterAll(async () => {
      await browser.close()
    })
  })
}
