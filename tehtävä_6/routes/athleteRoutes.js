const express = require("express");
const router = express.Router();
const athleteControllers = require('../controllers/athleteControllers');

// Yleiset routet
router.route("/").get(athleteControllers.getAll).post(athleteControllers.createNew);

// Specifin rivin routet
router.route("/:id")
    .get(athleteControllers.getById)
    .delete(athleteControllers.deleteById)
    .put(athleteControllers.updateById);

module.exports = router;
