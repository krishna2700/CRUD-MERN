import mongoose from "mongoose";

const connection = async () => {
  const username = encodeURIComponent("krishnaruparelia0207");
  const password = encodeURIComponent("Krishna@2700");
  const clusterUrl = "cluster0.pselxvx.mongodb.net";
  const dbName = "your-database-name";

  const URL = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default connection;
