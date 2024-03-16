const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: [true, "Please provide a position"],
    },
    company: {
      type: String,
      required: [true, "Please provide a company"],
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending", "hired"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
