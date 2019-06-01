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
                allowNull: false,
                references: { model: 'companies', key:'id'},
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
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
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('history_notes')
    }
};
