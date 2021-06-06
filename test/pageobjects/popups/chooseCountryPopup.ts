class ChooseCountryPopup {
  get SignupPopupForm () { return $('#signup-country-selection') }
  get CloseBtn () { return $('#signup-country-selection a.popup_new__close') }
  get SubmitBtn () { return $('.btn*=Next Step') }
  get Input () { return $('#signup-country-selection .smart-select__custom') }
  get CountryList () { return $$('.smart-select__item') }

  async closePopup () {
    await (await this.CloseBtn).click()
  }

  async changeFirstCountry () {
      await (await this.Input).click()
      await (await this.CountryList)[0].click()
      await (await this.SubmitBtn).click()
  }
}

export default new ChooseCountryPopup()
