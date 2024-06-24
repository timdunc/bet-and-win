const router = require("express").Router();
const Bet = require("../models/Bet");
const User = require("../models/User");

// Place a new bet
router.post('/', async (req, res) => {
    try {
        const bet = new Bet(req.body);
        await bet.save();
        res.status(201).json(bet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  });

//get a bet

router.get("/:id", async (req, res) => {
    try {
      const bet = await Bet.findById(req.params.id);
      res.status(200).json(bet);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get user's bet history

router.get("/bettor/history", async (req, res) => {
    try {
      const bettor = await User.findById(req.body.userId);
      const userBets = await Bet.find({ userId: bettor._id });
      res.status(200).json(userBets);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Get all bets
router.get('/bets/all', async (req, res) => {
    try {
        const bets = await Bet.find();
        res.status(200).json(bets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
