import The4kChat from '../pageobjects/shared/The4kChat'
import MainPage from '../pageobjects/pages/main.page'

describe('4k chat', () => {
  beforeEach(async () => {
    await MainPage.open()
    await The4kChat.openChat()
  })

  it('open chat', async () => {
    await The4kChat.setInputValue('Тимофей молодец')
    await browser.pause(2000)
    await expect(await The4kChat.PopupChat).toBeDisplayedInViewport()
    await The4kChat.closeChat()
    await expect(await The4kChat.PopupChat).not.toBeDisplayedInViewport()
  })

  it('open full screen popup', async () => {
    await browser.setWindowSize(1366, 1024)
    await The4kChat.fullScreen()
    await browser.pause(2000)
    const size = await (await The4kChat.PopupChat).getSize()
    const windowSize = await browser.getWindowSize()
    await expect(size.width).toBe(windowSize.width  - 4)
  })

  it('open new window', async () => {
    await browser.setWindowSize(1366, 1024)
    await The4kChat.openChat()
    await (await The4kChat.Link).click()
    await browser.pause(1000)

    const allPages = await browser.getWindowHandles()
    await browser.pause(1000)
    await browser.switchToWindow(allPages[1])

    await expect(browser).toHaveUrlContaining('info/instructions')
    const allH2 = await $$('h2')
    await expect(await allH2[1].getText()).toBe('ALTERNATIVE PAYMENT METHODS')
  })
})
