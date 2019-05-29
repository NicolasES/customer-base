const request = require('supertest')
const app = require('../../src/config/server')

describe('Test customer routes', () => {
    it('Should create new customer', async () => {
        const response = await request(app)
            .post('/customers')
            .send({
                name: "John",
                email: "john@email.com",
                phone: "(99) 99999-9999",
                annotations: "Um cliente importante!"
            })

        expect(response.status).toBe(201)
        expect(response.body).toMatchObject({
            name: "John",
            email: "john@email.com",
            phone: "(99) 99999-9999",
            annotations: "Um cliente importante!"
        })
    })
})