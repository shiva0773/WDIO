const login = require('../Pages/Login.page.js')


describe('Login page', function () {


    it('Login with valid cred', async () => {

        await browser.url('https://practicetestautomation.com/practice-test-login/')
      
       await login.login('student', 'Password123')
await login.getTitle()
await login.getMessage()
await login.Logout()
await browser.pause(3000)
    
    })





})

