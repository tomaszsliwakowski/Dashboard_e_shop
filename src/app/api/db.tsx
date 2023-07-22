const mongoose = require("mongoose");

const URI = `mongodb+srv://admin:admin123@shop.hst096m.mongodb.net/Shop?retryWrites=true&w=majorit`;

export default async function dbConnect() {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
