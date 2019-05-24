const CompanyRepository = require('../repositories/CompanyRepository')

const CompanyService = {
    createCompany: (companyData) => {
        return CompanyRepository.create(companyData)
    }
}

module.exports = CompanyService