const Athlete = require("../models/Athlete");

exports.getAll = async (req, res, next) => {
  try {
    const [athletes, _] = await Athlete.findAll();
    res.status(200).json({ count: athletes.length, athletes });
  } catch (error) {
    next(error);
  }
};

exports.createNew = async (req, res, next) => {
    try {
      let { 
        firstname,
        lastname,
        nickname,
        birthyear,
        weight,
        picturelink,
        sport,
        achievements,
        created_at
        } = req.body;
      let athlete = new Athlete(firstname, lastname, nickname, birthyear, weight, picturelink, sport, achievements, created_at);
      athlete = await athlete.save();
      res.status(201).json({ message: "Athlete created" });
    } catch (error) {
      next(error);
    }
  };
  
  exports.getById = async (req, res, next) => {
    try {
      let athleteId = req.params.id;
      let [athlete, _] = await Athlete.findById(athleteId);
      res.status(200).json({ athlete });
    } catch (error) {
      next(error);
    }
  };
  
  exports.deleteById = async (req, res, next) => {
    try {
      let athleteId = req.params.id;
      await Athlete.deleteById(athleteId);
      res.status(200).json({ message: "Athlete deleted" });
    } catch (error) {
      next(error);
    }
  };
  
  
  exports.updateById = async (req, res, next) => {
    try {
      let { 
        id,
        firstname,
        lastname,
        nickname,
        birthyear,
        weight,
        picturelink,
        sport,
        achievements
        } = req.body;
  
      await Athlete.updateWithId(id, firstname, lastname, nickname, birthyear, weight, picturelink, sport, achievements);
      res.status(200).json({ message: "Athlete updated" });
    } catch (error) {
      next(error);
    }
  };