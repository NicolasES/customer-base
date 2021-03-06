'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('customers', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            company_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: { model: 'companies', key: 'id'},
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            annotations: {
                type: Sequelize.TEXT,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('customers')
    }
};
