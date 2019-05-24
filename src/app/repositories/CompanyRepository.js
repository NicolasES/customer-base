const { Company } = require('../models')

const CompanyRepository = {
    create: (company) => {
        return Company.create(company)
    }
}

module.exports = CompanyRepository