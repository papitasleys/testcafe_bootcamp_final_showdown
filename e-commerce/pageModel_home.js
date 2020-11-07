import { Selector } from 'testcafe';

class Page {
    constructor() {
        //header elements
        this.imgBanner = Selector(
            '.banner > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)'
        );
        this.txtContactPhone = Selector('.shop-phone');
        this.linkContactUs = Selector('a').withText('Contact us');
        this.linkSignIn = Selector('a').withText('Sign in');
        this.imgHomeLogo = Selector('.logo');
        this.inputSearch = Selector('#search_query_top');
        this.btnSearch = Selector('button.btn:nth-child(5)');
        this.btnCart = Selector('.shopping_cart > a:nth-child(1)');

        //content elements
        this.contentSliderHome = Selector('#homepage-slider');
        this.listFixedContentHome = Selector(
            '#htmlcontent_top > ul:nth-child(1)'
        );
        this.listHomeTabs = Selector('#home-page-tabs');
        this.listBestSellers = Selector('#blockbestsellers');
        this.listPopular = Selector('#homefeatured');
        this.linkTabBestSellers = Selector('a.blockbestsellers');
        this.linkTabPopular = Selector('a.homefeatured');
        this.listStoreSections = Selector('#htmlcontent_home');

        // footer elements
        this.textFacebook = Selector('#facebook_block');
        this.textHomeInfo = Selector('#cmsinfo_block');
        this.blockSocialIcons = Selector('#social_block');
        this.inputNewsLetterEmail = Selector('#newsletter-input');
        this.btnNewsletterSubmit = Selector('button.btn:nth-child(2)');
        this.textFooterStoreInfo = Selector('#block_contact_infos');
        this.listFooterInformation = Selector(
            '#block_various_links_footer > ul:nth-child(2)'
        );
        this.listFooterCategories = Selector('.tree');
        this.listFooterMyAccount = Selector('.bullet');
        this.linkFooterMyAccount = Selector('a').withText('My account');
    }
}

export default new Page();
