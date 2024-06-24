// controllers/betController.js
const Bet = require('../models/Bet');

exports.placeBet = async (req, res) => {
  const { amount, choice } = req.body;

  try {
    const newBet = new Bet({
      user: req.user.id,
      amount,
      choice,
    });

    const bet = await newBet.save();
    res.json(bet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getBets = async (req, res) => {
  try {
    const bets = await Bet.find({ user: req.user.id });
    res.json(bets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
