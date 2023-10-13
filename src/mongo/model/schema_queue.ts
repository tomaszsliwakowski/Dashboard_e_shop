const mongoose = require("mongoose");

let schemaQueue = new mongoose.Schema([
  {
    id: Number,
    img: String,
    name: String,
    producer: String,
    price: Number,
    newPrice: Number,
    category: String,
    opinion: Number,
    spec: [String],
  },
]);

const saleQueue =
  mongoose.models.saleQueue || mongoose.model("saleQueue", schemaQueue);

export default saleQueue;
