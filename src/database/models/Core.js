const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CoreSchema = new Schema(
  {
    featuredWebsites: {
      type: [String],
      default: Array(5),
    },
    referrals: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

exports.Core = mongoose.model("Core", CoreSchema);
