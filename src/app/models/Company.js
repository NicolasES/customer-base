module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    })

    Company.associate = function (models) {
        Company.hasMany(models.Customer, {as: 'customers'})
    }

    return Company
}