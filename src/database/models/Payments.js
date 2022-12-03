const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentsSchema = new Schema(
  {
    memberId: {
      type: Schema.ObjectId,
      required: true,
    },
    hash: {
      type: String,
      default: "",
      required: true,
    },
    service: {
      type: String,
      default: "",
      required: true,
    },
    price: {
      type: Number,
      default: 25,
      required: true,
    },
    isCanceled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

exports.Payment = mongoose.model("payment", PaymentsSchema);
