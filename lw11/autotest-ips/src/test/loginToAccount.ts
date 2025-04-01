import { studentID } from "../common/data/studentID.data"
import { skipPopups } from "../common/tools/skipPopups"

const loginFieldXpath = '//input[@id = "loginField"]'
const passwordFieldXpath = '//input[@id = "passwordField"]'
const submitButtonXpath = '//input[@type = "submit"]'

const userMenuButtonXpath = '//div[@data-at ="id=top-panel-user-menu-button"]'
const userLoginTextXpath = '(//div[@data-at ="id=user-panel"]/div)[4]'

describe('Логинация в аккаунт', () => {

    it('Успешная логинация', async () => {
        await browser.url('https://ips-training.ispringlearn.ru/')

        await browser.$(loginFieldXpath).setValue('student')
        await browser.$(passwordFieldXpath).setValue('12345Q')

        await browser.$(submitButtonXpath).waitForClickable()
        await browser.$(submitButtonXpath).click()
        
        await skipPopups(browser, studentID)

        await browser.$(userMenuButtonXpath).waitForClickable()
        await browser.$(userMenuButtonXpath).click()

        const userLoginText = await browser.$ (userLoginTextXpath).getText()
        expect(userLoginText).toEqual('student')

    })

})



    

