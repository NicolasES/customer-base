const router = require('express').Router()

const { Company } = require('../app/models')

Company.create({
    name: "Empresa nicolas",
    description: "Nova empresa mto boa vamo lá"
})

router.get('/', (req, res) => {
    res.send('rota nova!')
})

module.exports = router