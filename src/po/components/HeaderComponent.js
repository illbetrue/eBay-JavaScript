
export class HeaderComponent {
  constructor(page) {
    this.page = page;
    this._searchInput = page.locator('[type="text"]');
    this._searchButton = page.locator('[type="submit"], button.gh-search__submitbtn');
    
  };

  async searchQuery(query) {
    await this._searchInput.type(query);
    await this._searchButton.click();
  };

};

