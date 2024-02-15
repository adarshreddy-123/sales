export const environment = {
    apiDomain: 'api'
};


const domain = environment.apiDomain;

export const Doctypes = {

    quotations: 'Quotation',
    lead: 'Lead',
    customer: 'Customer',
    salesorder: 'Sales Order',
    items: 'Item',
    delivery: 'Delivery Note'
};

export const ApiUrls = {
    resource: domain + '/resource',
    login: domain + '/method/login',
    logout: domain + '/method/logout',


};

export default {
    Doctypes,
    ApiUrls
};