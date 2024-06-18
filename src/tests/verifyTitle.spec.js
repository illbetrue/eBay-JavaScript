import { test } from '../fixtures/fixture';
import { compareText } from '../utils/compareText';


test('Verify the title@sanity', async ({ basePage }) => {
    const shouldBeParam = "be equal to";
    const titleText = "Electronics, Cars, Fashion, Collectibles & More | eBay"; 
    await basePage.openHomePage();
    const pageTitle = await basePage.page.title();
    compareText(pageTitle, titleText, shouldBeParam);
});
