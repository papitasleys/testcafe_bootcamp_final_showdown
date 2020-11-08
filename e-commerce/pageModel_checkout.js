import { Selector } from 'testcafe';

class Page {
    constructor() {
        this.btnProceedCheckout = Selector('.standard-checkout');
        this.txtCartSummary = Selector('#cart_title');
        this.txtCartHeader = Selector('.page-heading');
        this.btnCheckoutNext = Selector('button.button:nth-child(4)');
        this.checkTermsService = Selector('#cgv');
        this.linkPayBank = Selector('a').withText('Pay by bank wire');
        this.linkPayCheck = Selector('a').withText('Pay by check');
        this.btnConfirmOrder = Selector('button.button-medium');
        this.txtOrderSuccess = Selector('.alert');
        this.txtFancyError = Selector('.fancybox-error');
    }
}

export default new Page();
