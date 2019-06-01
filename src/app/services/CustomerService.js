const CustomerRepository = require('../repositories/CustomerRepository')

const CustomerService = {
    createCustomer: (customerData) => {
        return CustomerRepository.create(customerData)
    }
}

module.exports = CustomerService