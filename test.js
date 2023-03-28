const {Builder,options, By, Key, until} = require('selenium-webdriver');

(async function example(){
    
    let driver = new Builder().forBrowser('chrome').build();
    
     

    try{
        driver.manage().window().maximize();

       
            await driver.manage().setTimeouts({implicit:10000});

            await driver.get("https://www.luckybull.com/");

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("cookie-bar-button")).click();

            setTimeout(() => {  console.log("Noice!"); }, 5000);
            
            await driver.findElement(By.className('fas fa-times')).click();

            
            setTimeout(() => {  console.log("Noice!"); }, 5000);


            await driver.get("https://www.luckybull.com/en/");


            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.className('lb-btn yellow')).click();

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("terms")).click();

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("is_of_legal_age")).click();

            setTimeout(() => {  console.log("Noice!"); }, 5000);

           
            await driver.findElement(By.id("username")).sendKeys("testuser10");

            /*catch (e) {
                if (e instanceof WebDriverError) {
                    console.error('An error occurred: ', e);
                    await driver.quit();
                }*/
            
            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("email")).sendKeys("boris+1012@condor-gaming.com");
            
            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("password")).sendKeys("Bk1234567.");

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("register")).click();


        
            await driver.get("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/");

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.className('button button--medium button--mobile-before-hero-only ')).click();

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("identifierId")).sendKeys("boris@condor-gaming.com");

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.className('VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b')).click();

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.id("password")).sendKeys("Bk123456.");

            setTimeout(() => {  console.log("Noice!"); }, 5000);

            await driver.findElement(By.className('VfPpkd-Jh9lGc ')).click();

            setTimeout(() => {  console.log("Noice!"); }, 30000);

           

           

         await driver.findElement(By.id("password")).sendKeys("Bk123456.");

          setTimeout(() => {  console.log("Noice!"); }, 5000);

          await driver.findElement(By.className('VfPpkd-dgl2Hf-ppHlrf-sM5MNb')).click();

          setTimeout(() => {  console.log("Noice!"); }, 5000);

      

          


           



           // await driver.findElement(By.id("mc")).click();

           // setTimeout(() => {  console.log("Noice!"); }, 5000);


            
          
        
       }   catch (err) {
            console.log(err)
        } finally{
            console.log("jebo dedu svog");
           //await driver.quit();
           
    }
})();