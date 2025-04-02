
describe('first test', function (){

    it('My first test',async () => {

await browser.url('https://google.com')

await $('[name="q"]').setValue('hyderabad')
await browser.keys('Enter')
await browser.pause(3000)

    })



})