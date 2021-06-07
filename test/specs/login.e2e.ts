import MainPage from '../pageobjects/pages/main.page'
import LoginPanel from '../pageobjects/pages/login.panel'
// import SignupPage from '../pageobjects/pages/signup.page'
// import ChooseCountryPopup from '../pageobjects/popups/chooseCountryPopup'
// import CookiesBottomline from '../pageobjects/pages/cookiesBottomline'
describe('mr bit test', () => {
  beforeEach(async () => {
    await MainPage.open()
  })
  it('open login panel', async () => {
    await MainPage.openLoginPanel()
    await expect(await $('.login-panel')).toBeDisplayed()
    await browser.pause(1000)
  })
  it('login', async () => {
    await MainPage.openLoginPanel()
    await LoginPanel.setValidCreds({
      email: 'hammer_time@evetel.com',
      password: 'Hammer44'
    })
    await (await LoginPanel.SubmitBtn).click()
    await expect(await $('.userinfo')).toBeDisplayed()
  })
})
