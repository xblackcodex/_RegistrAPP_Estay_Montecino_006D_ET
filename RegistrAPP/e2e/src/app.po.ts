import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getPrueba1():Promise<string> {
    return element(by.css('app-root ion-title')).getText();
  }

  async getPrueba2():Promise<string> {
    return element(by.css('app-root ion-button')).getText();
  }

  async getPrueba3():Promise<string> {
    return element(by.css('app-root ion-item')).getText();
  }

  async getPrueba4():Promise<string> {
    return element(by.css('app-root ion-title')).getText();
  }

  async getPrueba5():Promise<string> {
    return element(by.css('app-root ion-title')).getText();
  }
}
