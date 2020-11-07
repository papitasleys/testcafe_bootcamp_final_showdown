import { Selector } from 'testcafe';

class Page {
    constructor() {
        // Sign up elements
        this.linkSignIn = Selector('a').withText('Sign in');
        this.inputEmail = Selector('#email_create');
        this.btnCreateAccount = Selector('#SubmitCreate');

        this.inputFirstName = Selector('#customer_firstname');
        this.inputLastNme = Selector('#customer_lastname');
        this.inputFormEmail = Selector('#email');
        this.inputPassword = Selector('#passwd');
        this.selectDOBDay = Selector('#days');

        this.inputAddressFirstName = Selector('#firstname');
        this.inputAddressLastName = Selector('#lastname');
        this.inputAddressLine1 = Selector('#address1');
        this.inputCity = Selector('#city');
        this.selectState = Selector('#id_state');
        this.inputZIP = Selector('#postcode');
        this.selectCountry = Selector('#id_country');
        this.inputMobilePhone = Selector('#phone_mobile');
        this.inputAddressAlias = Selector('#alias');

        this.btnRegister = Selector('#submitAccount');
        this.txtWelcome = Selector('.info-account')

        // sign in elements
        this.inputEmailAccount = Selector('#email');
        this.inputPasswordAccount = Selector('#passwd');
        this.btnSignIn = Selector('#SubmitLogin');

        //sing out element, all of them
        this.btnSignOut = Selector('.logout');
    }
}

export default new Page();
