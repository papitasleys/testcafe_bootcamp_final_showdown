import page from './pageModel';
import { data } from './data';

fixture('Pruebas del módulo mi cuenta').page(
    'http://automationpractice.com/index.php'
);

test('Crear una cuenta nueva', async (t) => {
    await t.click(page.signIn_link);
    console.log('Correo: ', data.email);
    console.log('First Name: ', data.firstName);
    console.log('Last Name: ', data.lastName);
    console.log('Address: ', data.pbox);
    console.log('City: ', data.city);

    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
      //  .debug()
        .takeScreenshot();

    await t
        .expect(page.email_form.value)
        .contains(data.email)
        .expect(page.email_form.hasAttribute('readonly'))
        .notOk()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastName)

        .expect(page.firstName_Address.value)
        .contains(data.firstName)
        .expect(page.lastName_Address.value)
        .contains(data.lastName)

        .typeText(page.password_input, data.password)

        .typeText(page.address, data.pbox)
        .expect(page.address.value)
        .contains(data.pbox)

        .typeText(page.city, data.city)
        .expect(page.city.value)
        .contains(data.city);
});

test('Log in en mi cuenta creada', async (t) => {});

test('Log out de mi cuenta', async (t) => {});

test('Crear cuenta con un correo ya existente', async (t) => {});

test('Validar recuperar un pasword válido', async (t) => {});

test('Validar recuperar un password inválido', async (t) => {});

test('Cambiar información de la cuenta', async (t) => {});