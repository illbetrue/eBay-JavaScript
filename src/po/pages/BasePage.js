import {HeaderComponent} from '../components/HeaderComponent';
import {SearchResultPage} from '../pages/SearchResultPage';
import {ItemPage} from '../pages/ItemPage';

export class BasePage {
  constructor(page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);
    this.searchResultPage = new SearchResultPage(page);
    this.itemPage = new ItemPage(page);
    this.pages = [page];
  }

  async openHomePage() {
    await this.page.goto('/');
  }

  async searchAndSelectItem(query, index, value, input, isMobile) {
    await this.openHomePage();
    await this.headerComponent.searchQuery(query);

    if (!isMobile) {
      const context = this.page.context();
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        this.searchResultPage.filteringAndSelectItemByIndex(index,input),
      ]);
      this.pages.push(newPage);
      await newPage.waitForLoadState('domcontentloaded');
      this.itemPage = new ItemPage(newPage);
      const result = await this.itemPage.getItemNameTextForDesktop();
      return result;
    } else {
      await this.searchResultPage.filteringAndSelectItemByIndex(index, value, input, isMobile);
      const result = await this.itemPage.getItemNameTextForMobile();
      return result;
    }
  };

  
};

