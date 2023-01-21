require("dotenv").config();
const mongoose = require("mongoose");
const DB_URL =
	process.env.DB_URL ||
	"mongodb+srv://A:A@cluster0.81swo.mongodb.net/growcalculator";
const connect = async () => {
	console.log();
	clientserver = await mongoose.connect(DB_URL);
	return clientserver;
};

module.exports = connect;
