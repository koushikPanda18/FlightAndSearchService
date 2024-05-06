'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
    {
      modelNumber:"Boeing 777",
      capacity:350,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Comac RET",
      capacity:450,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Airbus 534",
      capacity:300,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Embraer ERJ",
      capacity:400,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Bombardier Q217",
      capacity:250,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
