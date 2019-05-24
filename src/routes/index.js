const router = require('express').Router()

const CompanyController = require('../app/controllers/CompanyController')

router.get('/', (req, res) => {
    res.send('rota nova!')
})

router.post('/companies', CompanyController.create)

module.exports = router