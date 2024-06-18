import { SidebarFilterComponent } from "../components/SidebarFilterComponent";

export class SearchResultPage {
  constructor(page) {
    this.page = page;
    this._sidebarFilterComponent = new SidebarFilterComponent(page);
  };

  async filteringAndSelectItemByIndex(index, input, value, isMobile) {
    if (!isMobile) {
      try {
        await this.page.waitForSelector('ul.x-refine__main__value');
        await this._sidebarFilterComponent.markDesktopCheckbox(input, index);
  
        await this.page.waitForSelector('div.s-item__image-section');
        const items = await this.page.$$('div.s-item__image-section');
  
        if (index >= 0 && index < items.length) {
          await this.page.waitForFunction(
            (item) => item.isConnected && item.offsetParent !== null,
            items[index]
          );
          await items[index].scrollIntoViewIfNeeded();
          await items[index].click({ force: true });
        } else {
          throw new Error(`Index ${index} not found. Elements: ${items.length}`);
        }
      } catch (error) {
        console.error(`Error selecting item by index: ${error}`);
        throw error;
      }
    } else {
      await this._sidebarFilterComponent.chooseMobileFilterCategory(input);
      await this._sidebarFilterComponent.markMobileCheckBoxAndSubmit(value);
      await this.page.waitForSelector('div.s-item__image-section');
      const items = await this.page.$$('div.s-item__image-section');
      await this.page.waitForTimeout(500);
      if (index >= 0 && index < items.length) {
        await this.page.waitForFunction(
          (item) => item.isConnected && item.offsetParent !== null,
          items[index]
        );
        await items[index].scrollIntoViewIfNeeded();
        await items[index].click({ force: true });
      } else {
        throw new Error(`Index ${index} not found. Elements: ${items.length}`);
      }
    }
  };

  
};
