// routers/categoryRouter.js

const { Router } = require("express");
const router = new Router();

const Category = require("../models").category;

// GET all category names
router.get("/", async (req, res, next) => {
  try {
    const nameCategories = await Category.findAll();
    res.status(200).send(nameCategories);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
