const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection succesfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const newbookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  aurther: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("book", newbookSchema);

// const Book1 = new Book({
//   title: "red_wine",
//   aurther: "mist",
//   price: 169,
// });
const Book2 = new Book({
  title: "orange_wine",
  aurther: "wrist",
  price: 299,
});

Book2.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
