// models/Bet.js
const mongoose = require("mongoose");

const BetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    event: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    betType: {
      type: String,
      enum: ["win", "lose", "draw", "over/under", "spread", "other"], // Add more types as needed
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    odds: {
      type: Number,
      required: true,
    },
    potentialPayout: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "won", "lost", "cancelled"],
      default: "pending",
    },
    result: {
      type: String,
      enum: ["win", "lose", "draw", "push", "pending"], // Add more result types as needed
      default: "pending",
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

module.exports = mongoose.model("Bet", BetSchema);
