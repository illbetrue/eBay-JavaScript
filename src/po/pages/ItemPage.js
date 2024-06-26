
export class ItemPage {
  constructor(page) {
    this.page = page;
    this._desktopItemName = page.locator('.x-item-title__mainTitle');
    this._mobileItemName = page.locator('div.vi-title__main');
  };

  async getItemNameForDesktop() {
    return await this._desktopItemName.innerText();
  };

  async getItemNameForMobile() {
    return await this._mobileItemName.innerText();
  };
  
};


