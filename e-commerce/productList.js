import page from './pageModel_miCuenta';
import { data } from './data';

fixture('Pruebas del módulo buy').page(
    'http://automationpractice.com/index.php'
);

test('Buy something', async (t) => {
    await t.click(page.linkSignIn);
    await t
        .typeText(page.inputEmailAccount, data.email)
        .typeText(page.inputPasswordAccount, data.password)
        .click(page.btnSignIn)
        .expect(page.txtWelcome.innerText)
        .contains('Welcome to your account');
});
