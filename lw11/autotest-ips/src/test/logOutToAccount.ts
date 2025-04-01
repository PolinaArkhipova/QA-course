import { studentID } from "../common/data/studentID.data"
import { skipPopups } from "../common/tools/skipPopups"

const loginFieldXpath = '//input[@id = "loginField"]'
const passwordFieldXpath = '//input[@id = "passwordField"]'
const submitButtonXpath = '//input[@type = "submit"]'
        
const userMenuButtonXpath = '//div[@data-at ="id=top-panel-user-menu-button"]'
const userExitXpath = '//a[@data-at ="id=user-menu-target-logoff"]'

describe('test describe', () => {
    before('Логинация в аккаунт', async () => {
            
        await browser.url('https://ips-training.ispringlearn.ru/')

        await browser.$(loginFieldXpath).setValue('student')
        await browser.$(passwordFieldXpath).setValue('12345Q')

        await browser.$(submitButtonXpath).waitForClickable()
        await browser.$(submitButtonXpath).click()
        
        await skipPopups(browser, studentID)

    })

    it('Выход из аккаунта', async () => {
        await browser.$(userMenuButtonXpath).waitForClickable()
        await browser.$(userMenuButtonXpath).click()
        await browser.$(userExitXpath).waitForClickable()
        await browser.$(userExitXpath).click()
        await browser.pause(3000)

        const userLogin = await browser.$(loginFieldXpath).isDisplayed()
        expect(userLogin).toEqual(true)
    })
})





    

