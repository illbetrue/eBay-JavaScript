import { test } from '../fixtures/fixture';
import { compareText } from '../utils/compareText';


test('Search item@e2e', async ({ basePage, isMobile }) => {
    const shouldBeParam = "contain";
    const searchItem = 'Pixel 7';
    const result = await basePage.searchAndSelectItem(searchItem, 2, 'Storage Capacity', '256 GB', isMobile);
    compareText(result, searchItem, shouldBeParam);
});

