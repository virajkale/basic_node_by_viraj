const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const dbconnect = require("./config/Db.js");
const adminRoute = require("./routes/adminRouter.js");
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/globalErrHandler");

dbconnect();

const dotenv = require("dotenv");

dotenv.config({path:"./config/custom.env"});
const app = express();
app.use(express.json()); //pass incoming json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({ origin: "*" }));
app.use("/api/v1/admins",adminRoute);

const PORTS = process.env.PORT;

app.listen(PORTS,console.log(`server started at port ${PORTS}`));


