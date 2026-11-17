const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection succesfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// User.findById("6afbf9ec4b426e3bf582305e")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "tanya" }, { age: 27 }, { new: true }).then(
//   (res) => {
//     console.log(res);
//   },
// );
// const User1 = new User({
//   name: "Tousif",
//   email: "tousif99@gmail.com",
//   age: 24,
// });

// const User2 = new User({
//   name: "Aquib",
//   email: "Aquib324@gmail.com",
//   age: 22,
// });

// User2.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "tanya", email: "tanya321@gmail.com", age: 26 },
//   { name: "zishan", email: "zishan21@gmail.com", age: 22 },
//   { name: "massu", email: "massu@gmail.com", age: 29 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndDelete({ name: "zishan" }, { new: true }).then((res) => {
//   console.log(res);
// });

// User.deleteMany({ age: { $gte: 27 } }).then((res) => {
//   console.log(res);
// });
