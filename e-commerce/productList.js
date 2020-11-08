import pageAccount from './pageModel_miCuenta';
import pageHome from './pageModel_home';
import pageCheckout from './pageModel_checkout';
import pageProducts from './pageModel_products';
import { data } from './data';

fixture('Pruebas del módulo products').page(
    'http://automationpractice.com/index.php'
);

test('search something', async (t) => {
    await t
        .typeText(pageHome.inputSearch, data.productQuery)
        .expect(pageHome.inputSearch.value)
        .eql(data.productQuery)
        .click(pageHome.btnSearch)
        .expect(pageProducts.txtSearchHeader.innerText)
        .contains(data.productQuery.toUpperCase());
});

test('sort by name search', async (t) => {
    const optionSort = pageProducts.selectSortResults.find('option');

    await t
        .typeText(pageHome.inputSearch, data.productName)
        .expect(pageHome.inputSearch.value)
        .eql(data.productName)
        .click(pageHome.btnSearch)
        .expect(pageProducts.txtProductName.nth(1).innerText)
        .notContains('Blouse');

    await t
        .click(pageProducts.selectSortResults)
        .click(optionSort.withText('Product Name: A to Z'))
        .expect(pageProducts.txtProductName.nth(1).innerText)
        .contains('Blouse');
});

test('sort by price', async (t) => {
    const optionSort = pageProducts.selectSortResults.find('option');

    await t
        .typeText(pageHome.inputSearch, data.productName)
        .expect(pageHome.inputSearch.value)
        .eql(data.productName)
        .click(pageHome.btnSearch)
        .expect(pageProducts.txtProductPrice.nth(1).innerText)
        .notContains('16.40');

    await t
        .click(pageProducts.selectSortResults)
        .click(optionSort.withText('Price: Lowest first'))
        .expect(pageProducts.txtProductPrice.nth(1).innerText)
        .contains('16.40');
});
