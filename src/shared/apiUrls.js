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
    delivery: 'Delivery Note',
    contacts: 'Contact',
    taxes: 'erpnext.controllers.accounts_controller.get_taxes_and_charges'

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