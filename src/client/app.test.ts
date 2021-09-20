import 'expect-puppeteer'
describe('basic test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  })

  it('The title of the page should be "Title"', async () => {
    await expect(await page.title()).toMatch('Title');
  })
})