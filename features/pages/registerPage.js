
var registerPage = function() {

  this.site = function() {
    browser.get('https://prototypes.aws.aat.org.uk/register');
  };

  this.setFirstValue = function(value) {
    element(by.model('first')).sendKeys(value);
  };

  this.clickShowMeEveryThingRadioButton = function(){
    element(by.xpath("/html/body/app-root/app-courses/div[2]/div/div[1]/div[4]/label/span")).click;
  }

  this.clickAddButtonForStudentMemberShip = function(){
    element(by.xpath('/html/body/app-root/app-courses/app-simple-header/div/div[2]/div[2]/span[2]/fab-button-primary/a').click)
  }

  this.clickShoppingBasket = function(){
    element(by.xpath('/html/body/app-root/app-courses/app-simple-header/div/div[2]/div[1]/span/span[1]/img').click)
  }

 



};

module.exports = new registerPage();
