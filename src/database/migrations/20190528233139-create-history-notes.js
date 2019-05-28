'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('history_notes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            company_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            text: {
                type: Sequelize.TEXT,
                allowNull: false
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
            return queryInterface.addConstraint('history_notes',  ['company_id'], {
                type: 'foreign key',
                name: 'fk_history_to_company',
                references: {
                    table: 'companies',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            })
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('history_notes')
    }
};
