

export class SidebarFilterComponent {
  constructor(page) {
    this.page = page;
    this._mobileFilterButton = page.locator('button.srp-controls__control--link.srp-controls__control--link-left.srp-controls__control--link-enabled.btn');
    };

  async markDesktopCheckbox(value) {
    const checkbox = await this.page.locator(`input[aria-label='${value}']`);
    await checkbox.scrollIntoViewIfNeeded();
    if (!await checkbox.isChecked()) {
        await checkbox.click();
    }
    return checkbox;
  };

  async chooseMobileCategoriesFilter(input) {
    await this._mobileFilterButton.click();
    const mobileFilterCategoryButton = await this.page.locator(`(//span[text()='${input}']/following-sibling::span)[2]`);
    await mobileFilterCategoryButton.click();
  };

  async markMobileCheckBoxAndSubmit(value){
    const mobileCategoryCheckbox = await this.page.locator(`//label[text()='${value}']`);
    await mobileCategoryCheckbox.click();
    const filterCategorySubmitButton = await this.page.locator(`//button[@idx='3']`);
    await filterCategorySubmitButton.click();
    await this.page.waitForTimeout(500);
  };
  
};
