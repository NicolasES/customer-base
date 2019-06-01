module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        company_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        annotations: DataTypes.TEXT
    })

    Customer.associate = function(models) {
        Customer.belongsTo(models.Company, {foreing: 'company_id', as: 'company'})
    }

    return Customer
}