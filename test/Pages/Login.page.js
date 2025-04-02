class login {

    get username() {
        return $('#username')
    }

    get password() {
        return $('#password')
    }
    get submit() {
        return $('#submit')
    }
    get message() {

        return $("//*[@class='post-title']")

    }

    get logout() {
        return $("//*[contains(text(),'Log out')]")
    }


    async login(username, password) {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.submit.click()
    }

    async Logout() {
        await this.logout.click()
    }
    async getTitle() {
        return await browser.getTitle()
    }
    async getMessage() {
        return await this.message.getText()
    }
}

module.exports = new login()