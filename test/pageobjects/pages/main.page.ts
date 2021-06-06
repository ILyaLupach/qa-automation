import Page from './page'

class MainPage extends Page {
  get SignupLink() { return $('a.register') }
  get LoginLink() { return $('a.login') }

  async openSignupPopup() {
    await (await this.SignupLink).click()
  }

  async openLoginPanel() {
    await (await this.LoginLink).click()
  }

  open() {
    return super.open('/en')
  }
}

export default new MainPage()
