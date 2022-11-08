const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", employeeRoutes.routes);

app.listen(config.port, () => {
  console.log("Service endpoint= %s", config.url);
});
