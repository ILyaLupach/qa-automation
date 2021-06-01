import MainPage from '../pageobjects/pages/main.page'
import ChooseCountryPopup from '../pageobjects/popups/chooseCountryPopup'


describe('signUp open', () => {
  beforeEach(() => {
    browser.url('https://mrbit.bet/en/')
  })

  it('open country popup from header on mobile', async () => {
    await browser.setWindowSize(360, 640)
    const signupLink = await $('a.register')
    await signupLink.click()

    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayedInViewport()
  })

  it('open country popup from bottomline on mobile', async () => {
    await browser.setWindowSize(360, 640)
    const signupLink = await $('*=Sign up')
    await signupLink.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayedInViewport()
  })

  it('open country popup from header on desktop', async () => {
    await browser.setWindowSize(1366, 1024)
    await MainPage.openSignupPopup()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await ChooseCountryPopup.closePopup()
    expect(await $('#signup-country-selection')).not.toBeDisplayedInViewport()
  })

  it('open country popup from header on mobile login', async () => {
    await browser.setWindowSize(360, 640)
    const loginLink = await $('a.login')
    loginLink.click()

    const emeilInput = await $('input[name=email]')
    await emeilInput.setValue('electronic@mail.com')

    const signupLink = await $('.login-panel__register-icon')
    await signupLink.click()

    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayedInViewport()
  })

  it('open country popup from gamemode on desktop', async () => {
    await browser.setWindowSize(1366, 1024)
    await expect($('.preloader')).not.toBeDisplayed()
    const gamesList = await $$('.game-cell')
    const game = gamesList[3]

    await (await $('span*=New games')).scrollIntoView()
    await game.moveTo()
    const demoBtn = await $('.game-cell__demo')
    await demoBtn.click()

    const btnInfo = await $('.gamemode__icon_info')
    await btnInfo.click()
    const adasd = await $('.gamemode__profile')
    const signupBtn = await adasd.$('a*=Sign up')
    await signupBtn.click()
    expect(await $('#signup-country-selection')).toBeDisplayedInViewport()
    await (await $('.popup_new__close')).click()
    expect(await $('#signup-country-selection')).not.toBeDisplayedInViewport()
  })
})
