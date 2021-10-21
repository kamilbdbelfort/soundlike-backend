// routers/soundRouter.js

const { Router } = require("express");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Sound = require("../models").sound;
const Category = require("../models").category;

// GET Popular sounds, order by highest 'played'
router.get("/popular", async (req, res, next) => {
  try {
    const popularSounds = await Sound.find().orderby({ played: 1 }); // played: 1 returns ascending order; played:-1 returns descending order
    res.status(200).send(popularSounds);
  } catch (e) {
    next(e.message);
  }
});

// GET Newest sounds, order by 'createdAt'
router.get("/", async (req, res, next) => {
  try {
    const newestSounds = await Sound.find().orderby({ createdAt: -1 }); // createdAt: -1 orders by smallest date value first aka newest
    res.status(200).send(popularSounds);
  } catch (e) {
    next(e.message);
  }
});

// GET Search sounds by name
router.get("/search/:name", async (req, res, next) => {
  const searchName = Sequelize.fn(toString(req.params.name));
  if (!searchName) {
    return res.status(400).send("Please type in a search value!");
  }
  try {
    const searchSounds = await Sound.findAll({
      // put them all to lowercase using Sequelize.fn "lower"
      where: Sequelize.where(
        Sequelize.fn("lower", Sequelize.col("name")),
        Sequelize.fn("lower", `${searchName}`)
      ),
      // {
      //     name: {
      //         [Op.like]: `%${searchName}`
      //     }
      // }
    });
    res.status(200).send(searchSounds);
  } catch (e) {
    next(e.message);
  }
});

// GET all sounds of a given category
router.get("/category/:id", async (req, res, next) => {
  const categoryId = parseInt(req.params.id);
  if (!categoryId) {
    return res.status(400).send("Category ID hasn't been found");
  }
  try {
    const categorySounds = await Sound.finaAll({
      include: [Category],
      where: {
        categoryId: categoryId,
      },
    });
    res.status(200).send(categorySounds);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
