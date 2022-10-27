'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users',
      'avatar_id',
      {
        type: Sequelize.INTEGER,
        references: { 
          model: 'files', 
          key: 'id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      }, 
    );
  },

  async down (queryInterface) {
    return queryInterface.removeColumn('users', 'avatar_id');
  }
};
