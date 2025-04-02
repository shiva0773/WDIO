const Login = require('../Pages/Login.page.js')

describe('Login page', function () {


    it('Login with valid credentials', async () => {


       await browser.url('https://practicetestautomation.com/practice-test-login/')
      
        await Login.login('student', 'Password123')
        await browser.pause(2000)
        // await browser.$('#username').setValue('student')
        // await browser.$('#password').setValue('Password123')    
        // await browser.$('#submit').click()
        // await browser.pause(2000)
        // const title = await browser.getTitle()
        // console.log(title)
        // await expect(title).toBe('Logged In Successfully | Practice Test Automation')   
        // const text = await browser.$("//*[@class='post-title']").getText();

        // console.log(text)
        await Login.getTitle();

        // Validate the success message
        await Login.getMessage();

        // Perform logout
        await Login.logout();

        // await expect(text).toBe('Logged In Successfully')
        // await browser.$("//*[contains(text(),'Log out')]").click()
        // await browser.pause(2000)

    })




})