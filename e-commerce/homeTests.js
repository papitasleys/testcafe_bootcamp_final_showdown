import page from './pageModel_home';
import { data } from './data';
import { ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

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

    console.log('sign in link is up');
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
    await t.expect(page.btnCart.visible).ok()
    .takeScreenshot();
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
    await t.expect(page.listStoreSections.visible).ok()
    .takeScreenshot();
});

//footer tests
test('footer elements are displayed', async (t) => {
    console.log('facebook folow us is up');
    await t
        .expect(page.textFacebook.innerText)
        .contains('Follow us on Facebook');

    console.log('information block is up');
    await t.expect(page.textHomeInfo.innerText).contains('Come Visit Us');

    console.log('store sections grid is up');
    await t.expect(page.listStoreSections.visible).ok();

    console.log('newsletter box is up');
    await t.expect(page.inputNewsLetterEmail.visible).ok()
    await t.expect(page.btnNewsletterSubmit.visible).ok()
    .takeScreenshot();
});

//swap best sellers
test('swap to best sellers', async (t) => {
    console.log('popular is shown by default, best seller hidden');
    await t
        .expect(page.linkTabPopular.hasAttribute('class', 'active'))
        .ok()
        .expect(page.listPopular.visible)
        .ok()
        .expect(page.listBestSellers.visible)
        .notOk();

    console.log(' swaping to best sellers');
    await t
        .click(page.linkTabBestSellers)
        .expect(page.linkTabBestSellers.hasAttribute('class', 'active'))
        .ok()
        .expect(page.listPopular.visible)
        .notOk()
        .expect(page.listBestSellers.visible)
        .ok()
        .takeScreenshot();
});

//social links
test('facebook social', async (t) => {
    console.log('click on facebook');
    await t
        .click(page.linkFacebook)
        .expect(getLocation()).contains(data.facebookUrl)
        .takeScreenshot()
        .closeWindow();
});

test('twitter social', async (t) => {
    console.log('click on twitter');
    await t
        .click(page.linkTwitter)
        .expect(getLocation()).contains(data.twitterUrl)
        .takeScreenshot()
        .closeWindow();
});

test('youtube social', async (t) => {
    console.log('click on youtube');
    await t
        .click(page.linkYoutube)
        .expect(getLocation()).contains(data.youtubeUrl)
        .takeScreenshot()
        .closeWindow();
});

test('google+ social', async (t) => {
    console.log('click on google+');
    await t
        .click(page.linkGooglePlus)
        .expect(getLocation()).contains(data.googlePlusUrl)
        .takeScreenshot()
        .closeWindow();
});