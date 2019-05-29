const router = require('express').Router()

const CompanyController = require('../app/controllers/CompanyController')
const CustomerController = require('../app/controllers/CustomerController')

router.get('/', (req, res) => {
    res.send('rota nova!')
})

router.post('/companies', CompanyController.create)
router.post('/customers', CustomerController.create)

module.exports = router