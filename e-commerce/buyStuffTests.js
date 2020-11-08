import pageAccount from './pageModel_miCuenta';
import pageHome from './pageModel_home';
import pageCheckout from './pageModel_checkout';
import { data } from './data';

fixture('Pruebas del módulo buy').page(
    'http://automationpractice.com/index.php'
);

test('Buy something', async (t) => {
    await t.click(pageAccount.linkSignIn);
    await t
        .typeText(pageAccount.inputEmailAccount, data.validAccountEmail)
        .typeText(pageAccount.inputPasswordAccount, data.password)
        .click(pageAccount.btnSignIn)
        .expect(pageAccount.txtWelcome.innerText)
        .contains('Welcome to your account');
    await t
        .click(pageHome.imgHomeLogo)
        .expect(pageHome.listPopular.visible).ok()
        .hover(pageHome.listPopular.find('li').nth(0))
        .click(pageHome.btnAddToCart);
    await t
        .click(pageHome.btnCheckout)
        .expect(pageCheckout.txtCartSummary.visible).ok();
    await t
        .click(pageCheckout.btnProceedCheckout)
        .expect(pageCheckout.txtCartHeader.innerText).contains('ADDRESSES')
    await t
        .click(pageCheckout.btnCheckoutNext)
        .expect(pageCheckout.txtCartHeader.innerText).contains('SHIPPING')
    await t
        .click(pageCheckout.checkTermsService)
        .click(pageCheckout.btnCheckoutNext)
        .expect(pageCheckout.txtCartHeader.innerText).contains('PAYMENT')
    await t
        .click(pageCheckout.linkPayCheck)
        .expect(pageCheckout.txtCartHeader.innerText).contains('SUMMARY')
    await t
        .click(pageCheckout.btnConfirmOrder)
        .expect(pageCheckout.txtOrderSuccess.innerText)
        .contains('is complete')
        .takeScreenshot();
});

test('Buy something do not agree terms - karen wants to talk to the manager', async (t) => {
    await t.click(pageAccount.linkSignIn);
    await t
        .typeText(pageAccount.inputEmailAccount, data.validAccountEmail)
        .typeText(pageAccount.inputPasswordAccount, data.password)
        .click(pageAccount.btnSignIn)
        .expect(pageAccount.txtWelcome.innerText)
        .contains('Welcome to your account');
    await t
        .click(pageHome.imgHomeLogo)
        .expect(pageHome.listPopular.visible).ok()
        .hover(pageHome.listPopular.find('li').nth(0))
        .click(pageHome.btnAddToCart);
    await t
        .click(pageHome.btnCheckout)
        .expect(pageCheckout.txtCartSummary.visible).ok();
    await t
        .click(pageCheckout.btnProceedCheckout)
        .expect(pageCheckout.txtCartHeader.innerText).contains('ADDRESSES')
    await t
        .click(pageCheckout.btnCheckoutNext)
        .expect(pageCheckout.txtCartHeader.innerText).contains('SHIPPING')
    await t
        .click(pageCheckout.btnCheckoutNext)
        .expect(pageCheckout.txtFancyError.innerText).contains('must agree terms')
        .takeScreenshot();
});
