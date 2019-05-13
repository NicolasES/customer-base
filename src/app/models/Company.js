module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("Company", {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    })

    return Company
}