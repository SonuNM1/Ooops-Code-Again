const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(
      `Database connnected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (error) {
    console.log('Database connection error: ', error)
    process.exit(1) ; 
  }
};

module.exports = dbConnect;
