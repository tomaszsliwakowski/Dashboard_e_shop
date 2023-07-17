const mongoose = require("mongoose");

let schemaAll = new mongoose.Schema({
  products: [
    {
      id: Number,
      img: String,
      name: String,
      producer: String,
      price: Number,
      category: String,
      opinion: Number,
      spec: [String],
    },
  ],
});

const ProdAll_DB =
  mongoose.models.ProdAll || mongoose.model("ProdAll", schemaAll);

export default ProdAll_DB;
