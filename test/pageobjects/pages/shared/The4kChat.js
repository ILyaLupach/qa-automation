import Page from '../page';

class The4kChat {
  get ChatBtnOpen () { return $('.chat__handle') }
  get PopupChat () { return $('#dvn-widget-support-chat-app') }
  get ClosePopup () { return $('.dvn-widget-close') }
  get NewWinBtn () { return $('.dvn-widget-new-win') }
  get ChatInput () { return $('#form-start-text') }
  get Link () {return $('a*=info/instructions')}

  async openChat () {
    await (await this.ChatBtnOpen).click()
  }

  async closeChat () {
    await (await this.ClosePopup).click()
  }

  async fullScreen () {
    await (await this.NewWinBtn).click()
  }

  async setInputValue (text) {
    await (await this.ChatInput).setValue(text)
  }
}

export default new The4kChat()
