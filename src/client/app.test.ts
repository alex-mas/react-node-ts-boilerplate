import 'expect-puppeteer'
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  })

  it('should display "google" text on page', async () => {
    await expect(await page.title()).toMatch('Title');
  })
})