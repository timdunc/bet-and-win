const router = require("express").Router();
const User = require("../models/User");
const Bet = require("../models/Bet");
const bcrypt = require("bcryptjs");

// //REGISTER
// router.post("/register", async (req, res) => {
//   try {

//     //generate new pin
//     const salt = await bcrypt.genSalt(10);
//     const hashedpin = await bcrypt.hash(req.body.pin, salt);

//     //create new user
//     const newUser = new User({
//       phonenumber: req.body.phonenumber,
//       pin: hashedpin,
//     });

//     //save user and respond
//     const user = await newUser.save();
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// //LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ phonenumber: req.body.phonenumber });
//     !user && res.status(404).json("user not found");

//     const validpin = await bcrypt.compare(req.body.pin, user.pin)
//     !validpin && res.status(400).json("wrong pin, Please enter a correct pin")

//     res.status(200).json(user)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// module.exports = router;

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({
      phonenumber: req.body.phonenumber,
    });
    if (existingUser) {
      res.status(400).json({ message: "Phone number already exists" });
      return;
    }

    //generate new pin
    const salt = await bcrypt.genSalt(10);
    const hashedpin = await bcrypt.hash(req.body.pin, salt);

    //create new user
    const newUser = new User({
      phonenumber: req.body.phonenumber,
      pin: hashedpin,
    });

    //save user and respond
    const result = await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ message: "An error occurred. Please try again." });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ phonenumber: req.body.phonenumber });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const validpin = await bcrypt.compare(req.body.pin, user.pin);
    if (!validpin) {
      res.status(400).json({message : "Wrong pin, Please enter a correct pin"});
      return;
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json(err); // Send the error as a response with a status code of 500
  }
});

module.exports = router;
