import { Selector } from 'testcafe';

class Page {
    constructor() {
        this.txtSearchHeader = Selector('.page-heading');
        this.selectSortResults = Selector('#selectProductSort');
        this.txtProductName = Selector('.product_list').find('h5');
        this.txtProductPrice = Selector('.product_list').find('span');
    }
}

export default new Page();
