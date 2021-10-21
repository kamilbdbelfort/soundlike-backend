// routers/soundRouter.js

const { Router } = require("express");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Sound = require("../models").sound;
const Category = require("../models").category;

// GET Popular sounds, order by highest 'played'
router.get("/popular", async (req, res, next) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;
  try {
    const popularSounds = await Sound.findAll({
      limit,
      offset,
      order: [["played", "DESC"]],
    });
    res.status(200).send(popularSounds);
  } catch (e) {
    next(e.message);
  }
});

// GET Newest sounds, order by 'createdAt'
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;
  try {
    const newestSounds = await Sound.findAll({
      limit,
      offset,
      order: [["createdAt", "ASC"]],
    });
    res.status(200).send(newestSounds);
  } catch (e) {
    next(e.message);
  }
});

// GET Search sounds by text
router.get("/search/:text", async (req, res, next) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;
  const searchText = req.params.text;
  console.log("search text: ", searchText);
  if (!searchText) {
    return res.status(400).send("Please type in a search value!");
  }
  try {
    const searchSounds = await Sound.findAll({
      limit,
      offset,
      // put them all to lowercase using Sequelize.fn "lower"
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${searchText}%`,
            },
          },
          {
            description: {
              [Op.iLike]: `%${searchText}%`,
            },
          },
        ],
      },
    });
    res.status(200).send(searchSounds);
  } catch (e) {
    next(e.message);
  }
});

// GET all sounds of a given category
router.get("/category/:id", async (req, res, next) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;
  const categoryId = parseInt(req.params.id);
  if (!categoryId) {
    return res.status(400).send("Category ID hasn't been found");
  }
  try {
    const categorySounds = await Category.findAll({
      limit,
      offset,
      include: [{ model: Sound }],
      where: { id: categoryId },
    });
    res.status(200).send(categorySounds);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
