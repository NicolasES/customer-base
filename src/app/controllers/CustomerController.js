const CustomerController = {
    create: (req, res) => {
        res.status(201).json({
            name: "John",
            email: "john@email.com",
            phone: "(99) 99999-9999",
            annotations: "Um cliente importante!"
        })
    }
}

module.exports = CustomerController