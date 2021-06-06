import Page from './page'

class SignupPage extends Page {
  get InputEmail () { return $('.signup__form input[name=email]') }
  get InputPassword () { return $('.signup__form input[name=password]') }
  get Errors () { return $('.signup__form .error') }
  get SubmitBtn () { return $('.signup__form .btn_large') }

  async setInvalidCreds ({ email, password }: {email: string, password: string}) {
    await (await this.InputEmail).setValue(email)
    await (await this.InputPassword).setValue(password)
  }
}

export default new SignupPage()
