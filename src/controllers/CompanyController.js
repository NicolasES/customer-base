const { Company } = require('../app/models')

const CompanyController = {
    create: (req, res) => {
        Company.create(req.body)
        res.status(201).send('criado')
    }
}

module.exports = CompanyController