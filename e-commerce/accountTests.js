import page from './pageModel_miCuenta';
import { data } from './data';

fixture('Pruebas del módulo mi cuenta').page(
    'http://automationpractice.com/index.php'
);

test('Crear una cuenta nueva', async (t) => {
    console.log('signin in');
    await t.click(page.linkSignIn);

    const optionState = page.selectState.find('option');
    const optionCountry = page.selectCountry.find('option');

    console.log(data.email);
    await t.typeText(page.inputEmail, data.email).click(page.btnCreateAccount);

    console.log('email is the same ' + data.email);
    await t
        .expect(page.inputFormEmail.value)
        .contains(data.email)
        .expect(page.inputFormEmail.hasAttribute('readonly'))
        .notOk();

    console.log(data.firstName + data.lastName);
    await t
        .typeText(page.inputFirstName, data.firstName)
        .typeText(page.inputLastNme, data.lastName);

    console.log('first and las names are copied to address form');
    await t
        .expect(page.inputAddressFirstName.value)
        .contains(data.firstName)
        .expect(page.inputAddressLastName.value)
        .contains(data.lastName);

    console.log(data.password);
    await t.typeText(page.inputPassword, data.password);

    console.log(data.address);
    await t
        .typeText(page.inputAddressLine1, data.address)
        .expect(page.inputAddressLine1.value)
        .contains(data.address);

    console.log(data.city);
    await t
        .typeText(page.inputCity, data.city)
        .expect(page.inputCity.value)
        .contains(data.city);

    console.log(data.state);
    await t
        .click(page.selectState)
        .click(optionState.withText(data.state))
        .expect(page.selectState.value)
        .eql(data.stateCode);

    console.log(data.zipCode);
    await t
        .typeText(page.inputZIP, data.zipCode)
        .expect(page.inputZIP.value)
        .contains(data.zipCode);

    console.log(data.country);
    await t
        .click(page.selectCountry)
        .click(optionCountry.withText(data.country))
        .expect(page.selectCountry.value)
        .eql(data.countryCode);

    console.log(data.mobilePhone);
    await t
        .typeText(page.inputMobilePhone, data.mobilePhone)
        .expect(page.inputMobilePhone.value)
        .contains(data.mobilePhone);

    console.log(data.addressAlias);
    await t
        .click(page.inputAddressAlias)
        .pressKey('delete')
        .typeText(page.inputAddressAlias, data.addressAlias)
        .expect(page.inputAddressAlias.value)
        .contains(data.addressAlias);

    await t
        .click(page.btnRegister)
        .expect(page.txtWelcome.innerText)
        .contains('Welcome to your account')
        .takeScreenshot();
    console.log(page.txtWelcome.innerText);
});

test('Log in en mi cuenta creada', async (t) => {
    await t.click(page.linkSignIn);
    await t
        .typeText(page.inputEmailAccount, data.email)
        .typeText(page.inputPasswordAccount, data.password)
        .click(page.btnSignIn)
        .expect(page.txtWelcome.innerText)
        .contains('Welcome to your account')
        .takeScreenshot();
});

test('Log out de mi cuenta', async (t) => {
    await t.click(page.linkSignIn);
    await t
        .typeText(page.inputEmailAccount, data.email)
        .typeText(page.inputPasswordAccount, data.password)
        .click(page.btnSignIn)
        .expect(page.txtWelcome.innerText)
        .contains('Welcome to your account');
    await t
        .click(page.btnSignOut)
        .expect(page.btnSignIn.visible)
        .ok()
        .expect(page.btnSignOut.visible)
        .notOk()
        .takeScreenshot();
});

test('Crear cuenta con un correo ya existente', async (t) => {});

test('Validar recuperar un pasword válido', async (t) => {});

test('Validar recuperar un password inválido', async (t) => {});

test('Cambiar información de la cuenta', async (t) => {});
