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
    addressAlias: 'generic alias'
};

export { data };