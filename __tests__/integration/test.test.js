const { Company } = require('../../src/app/models')

describe('Teste', () => {
    it('should sum two numbers', () => {
        const x = 2
        const y = 4

        const sum = x + y

        expect(sum).toBe(6)
    })

    it('should create a new company', async () => {

        const company = await Company.create({
            name: "Empresa nicolas",
            description: "Nova empresa mto boa vamo lá"
        })

        expect(company.name).toBe("Empresa nicolas")
    })
})