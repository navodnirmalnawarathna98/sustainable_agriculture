const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const app = express(); // Initialize the Express application

require("dotenv").config(); //read variables from a .env file into process.env

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection; // MongoDB Connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
});

app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
});

//  admin route
const AdminRouter = require("./routes/AdminRouter");
//http://localhost:8070/admin
app.use("/admin",AdminRouter);

// agri rules route
const AgriRulesRouter = require("./routes/AgriRulesRouter");
//http://localhost:8070/agrirule
app.use("/agrirule",AgriRulesRouter);

// agri company route
const CompanyRouter = require("./routes/CompaniesRouter");
//http://localhost:8070/company
app.use("/company",CompanyRouter);

// products
const ProductRouter = require("./routes/ProductRouter");
//http://localhost:8070/product
app.use("/product",ProductRouter);



