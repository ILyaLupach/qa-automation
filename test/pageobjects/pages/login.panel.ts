import Page from './page'
class LoginPanel extends Page {
  get OpenLoginPanel() { return $('.login-panel') }
  get InputEmail() { return $('.login-panel__form input[name=email]') }
  get InputPassword() { return $('.login-panel__form input[name=password]') }
  get SubmitBtn() { return $('.login-panel .form-button') }
  get CloseBtn() { return $('.login-panel .login-panel__close') }
  async setValidCreds({ email, password }: { email: string, password: string }) {
    await (await this.InputEmail).setValue(email)
    await (await this.InputPassword).setValue(password)
  }
  async closeLoginPanel() {
    await (await this.CloseBtn).click()
  }
}
export default new LoginPanel()
