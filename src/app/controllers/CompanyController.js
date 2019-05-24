const CompanyService = require('../services/CompanyService')

const CompanyController = {
    create: async (req, res) => {
        let result = await CompanyService.createCompany(req.body)
        res.status(201).json(result)
    }
}

module.exports = CompanyController