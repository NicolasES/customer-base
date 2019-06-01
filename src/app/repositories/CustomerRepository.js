const { Customer } = require('../models')

const CustomerRepository = {
    create: (customer) => {
        return Customer.create(customer)
    } 
}

module.exports = CustomerRepository