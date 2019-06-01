const CustomerService = require('../services/CustomerService')

const CustomerController = {
    create: async (req, res) => {
        let result = await CustomerService.createCustomer(req.body)
        res.status(201).json(result)
    }
}

module.exports = CustomerController