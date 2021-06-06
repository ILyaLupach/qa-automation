describe('betting page', () => {
  it('open betting page with CW jurisdictio', async () => {
    await browser.url('https://mrbit.bet/en')

    const bettingLink = await $('a*=Sports Betting')
    await bettingLink.click()

    await expect(browser).toHaveUrlContaining('betting')

    await browser.pause(3000)

    const bettingPage = await $('#bt-inner-page')
    await expect(bettingPage).toBeDisplayed()
  })
})
