const {test, spec}=require('@playwright/test')
 
test("First Test Script",async({page})=>{

    // First Test Script

    await page.goto("https://www.w3schools.com/")

    await page.waitForTimeout(4000)

})
 
test("Second Test Script",async({page})=>{

    // First Test Script

    await page.goto("https://poi.apache.org/")

    await page.waitForTimeout(4000)

})
 
test("Third Test Script",async({page})=>{

    // First Test Script

    await page.goto("https://tomcat.apache.org/")

    await page.waitForTimeout(4000)

})
 