"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Movie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TV-shows",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Starwars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "300 Spartans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Friends",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jurrasic Park",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "James Bond",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Borat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zombie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Terminator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokemon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vehicle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Forrest Gump",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Items",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
