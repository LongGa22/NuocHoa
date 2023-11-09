// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//     street: {
//       type: String,
//       default: '',
//     },
//     city: {
//         type: String,
//         default: '',
//     }
// });

// customerSchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

// customerSchema.set('toJSON', {
//     virtuals: true,
// });

// exports.User = mongoose.model('User', userSchema);
// exports.userSchema = userSchema;

// module.exports = mongoose.model("User", userSchema)
// exports.User = mongoose.model('User', userSchema);

// const User = mongoose.model('User', userSchema);
// export default User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    lastname: { type: String },
    firtname: { type: String },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // created: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);