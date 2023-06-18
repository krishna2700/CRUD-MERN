import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  userId: Number, // Add a field to store the auto-incremented ID
});

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    // Check if the document is newly created
    const lastUser = await User.findOne({}, {}, { sort: { userId: -1 } }); // Find the document with the highest userId
    const newUserId = lastUser ? lastUser.userId + 1 : 1; // Increment the highest userId or start from 1
    this.userId = newUserId; // Assign the new userId to the document being saved
  }

  next(); // Proceed to the next middleware
});

const User = mongoose.model("User", userSchema);

export default User;
