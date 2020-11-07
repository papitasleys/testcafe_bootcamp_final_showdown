import page from './pageModel_home';
import { data } from './data';

fixture('Pruebas del módulo home').page(
    'http://automationpractice.com/index.php'
);

test('header elements are displayed', async (t) => {
    console.log('discount banner is up');
    await t.expect(page.imgBanner.visible).ok();

    console.log('contact us link is up');
    await t.expect(page.linkContactUs.visible).ok();

    console.log('contact number is up');
    await t.expect(page.txtContactPhone.visible).ok();

    console.log('Sing in link is up');
    await t.expect(page.linkSignIn.visible).ok();

    console.log('home logo is up');
    await t.expect(page.imgHomeLogo.visible).ok();

    console.log('search box is up');
    await t
        .expect(page.inputSearch.visible)
        .ok()
        .expect(page.btnSearch.visible)
        .ok();

    console.log('cart link is up');
    await t.expect(page.btnCart.visible).ok();
});

test('content elements are displayed', async (t) => {
    console.log('top content is up');
    await t
        .expect(page.contentSliderHome.visible)
        .ok()
        .expect(page.listFixedContentHome.nth(0).visible)
        .ok();

    console.log('tabs are up');
    await t
        .expect(page.linkTabPopular.visible)
        .ok()
        .expect(page.linkTabBestSellers.visible)
        .ok();

    console.log('store sections grid is up');
    await t.expect(page.listStoreSections.visible).ok();
});

//footer tests

//swap best sellers

//logo and banner links
