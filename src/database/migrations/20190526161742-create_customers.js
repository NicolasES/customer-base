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
                allowNull: true
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
        }).then(() => {
            return queryInterface.addConstraint('customers', ['company_id'], {
                type: 'foreign key',
                name: 'fk_user_to_company',
                references: {
                table: 'companies',
                field: 'id'
                },
                onDelete: 'set null',
                onUpdate: 'cascade'
            })
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('customers')
    }
};
