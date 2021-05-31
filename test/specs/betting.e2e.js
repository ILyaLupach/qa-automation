describe('open betting page', () => {
	before(async () => {
		await browser.url('https://mrbit.bet/en/')
  })

  it('open betting with CW jurisdiction', async () => {
    const bettingLink = await $('a*=Sports Betting')
    await bettingLink.click()
    expect(browser).toHaveUrlContaining('webdriver')
    const bettingPage = await $('#bt-inner-page')
    await expect(bettingPage).toBeDisplayed()
  })

  //проверить на МТ ДЕ что беттинг недоступен
})
