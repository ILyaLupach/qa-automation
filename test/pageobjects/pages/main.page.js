import Page from './page';

class MainPage {
    get SignupLink () { return $('a.register') }
    get LoginLink () { return $('a.login') }

    async openSignupPopup () {
        await (await this.SignupLink).click()
    }
}

export default new MainPage();
