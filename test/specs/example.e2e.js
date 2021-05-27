import MainPage from '../pageobjects/pages/main.page'
import SignupPage from '../pageobjects/pages/signup.page'
import ChooseCountryPopup from '../pageobjects/popups/chooseCountryPopup'

describe('Mr_bit test describe', () => {
	before(async () => {
		await MainPage.open()
	})
	it('open signup popup', async () => {
		await MainPage.openSignupPopup()
		await expect($('#signup-country-selection')).toBeDisplayed()
	})

	it('open signUp page', async () => {
		await ChooseCountryPopup.changeFirstCountry()
		await expect(browser).toHaveUrlContaining('/signup/step1')
	})

	it('input invalid emeil and password', async () => {
		await SignupPage.setInvalidCreds({
			email: 'qweqweqwe@qwqsqwdqwd.qwedwed',
			password: 'asda!!!qwa1Q'
		})
		await (await SignupPage.SubmitBtn).click()
		await expect(await SignupPage.Errors).toBeDisplayed()
		await browser.pause(3000)
	})
})
