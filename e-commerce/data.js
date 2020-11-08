let rndNumber = Math.random().toString(36).substr(1, 4);

let data = {
    email: 'dummy' + rndNumber + '@mailinator.com',
    firstName: 'cosme',
    lastName: 'fulanito',
    password: '88888',
    pbox: 'PO Box 7687',
    city: 'Los Angeles',
    dayDOB: '1',
    monthDOB: 'January',
    yearDOB: '1991',
    address: 'calle falsa 123',
    city: 'seattle',
    state: 'Washington',
    stateCode: '47',
    zipCode: '98109',
    country: 'United States',
    countryCode: '21',
    mobilePhone: '2125459878',
    addressAlias: 'generic alias',
    //expected urls
    facebookUrl: 'facebook.com/groups/525066904174158',
    twitterUrl: 'twitter.com/seleniumfrmwrk',
    youtubeUrl: '/channel/UCHl59sI3SRjQ-qPcTrgt0tA',
    googlePlusUrl: '/plus.google.com/111979135243110831526',
    validAccountEmail: 'dummy684597@mailinator.com',
    //querys
    productQuery: 'pink',
    productName: 'DRESS',
};

export { data };
