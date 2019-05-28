const request = require('supertest')

const app = require('../../src/config/server')

const { Company } = require('../../src/app/models')

describe('Teste', () => {
    it('should create a new company', async () => {

        const company = await Company.create({
            name: "Empresa nicolas",
            description: "Nova empresa mto boa vamo lá"
        })

        const response = await request(app)
            .post("/companies")
            .send({
                name: company.name,
                description: company.description
            })

        expect(response.status).toBe(201)
        expect(response.body.name).toBe('Empresa nicolas')
        expect(response.body.description).toBe("Nova empresa mto boa vamo lá")
    })
})