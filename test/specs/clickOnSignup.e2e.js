import ChooseCountryPopup from '../pageobjects/popups/chooseCountryPopup'

describe('signup link', () => {
  beforeEach(() => {
    browser.url('https://mrbit.bet/en')
  })

  it('open country popup from header mobile', async () => {
    await browser.setWindowSize(375, 812)
    const signupLink = await $('a.register')
    await signupLink.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayed()
  })

  it('open country mobile from botomline on mobile', async () => {
    await browser.setWindowSize(375, 812)
    const signupLinkBotomline = await $('a*=Sign up')
    await signupLinkBotomline.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayed()
  })

  it('open country mobile from login on mobile (header and botomline)', async () => {
    await browser.setWindowSize(375, 812)
    const loginLink = await $('a.login')
    await loginLink.click()
    expect(await $('.login-panel__form')).toBeDisplayedInViewport()
    const signupLink = await $('a.login-panel__register-icon')
    await signupLink.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayed()

    await loginLink.click()
    expect(await $('.login-panel__form')).toBeDisplayedInViewport()
    const signupLinkBotomline = await (await $('.mobile-bottom-auth')).$('a*=Sign up')
    await signupLinkBotomline.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayed()
  })

  it('open country popup from header on desktop', async () => {
    await browser.setWindowSize(1366, 1024)
    const signupLink = await $('a.register')
    await signupLink.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    const countrySelect = await $('.smart-select__value')
    await countrySelect.click()
    const input = await $('input[name=countryCode]')
    await input.setValue('Germa')
    await (await $('.smart-select__item')).click()
    await (await $('button*=Next Step')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayed()
  })

  it('open country popup from gamemode on desktop', async () => {
    await browser.setWindowSize(1366, 1024)
    await expect($('.preloader')).not.toBeDisplayed()
    const gamesList = await $$('.game-cell')
    const game = gamesList[3]
    await (await $('span*=New games')).scrollIntoView()
    await game.moveTo()
    await (await game.$('.game-cell__demo')).click()
    const gamemodeInfoBtn = await $('.gamemode__icon_info')
    await gamemodeInfoBtn.click()
    const signupBtn = await (await $('.gamemode__profile')).$('*=Sign up')
    await signupBtn.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayed()
  })
})
