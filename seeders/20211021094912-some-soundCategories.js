"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "soundCategories",
      [
        {
          categoryId: 1,
          soundId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          soundId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          soundId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          soundId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          soundId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 9,
          soundId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 14,
          soundId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 12,
          soundId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 12,
          soundId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 12,
          soundId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 12,
          soundId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 15,
          soundId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 14,
          soundId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 14,
          soundId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          soundId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          soundId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 10,
          soundId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          soundId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 13,
          soundId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          soundId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          soundId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          soundId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          soundId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          soundId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 11,
          soundId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          soundId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          soundId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          soundId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          soundId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          soundId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          soundId: 25,
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
