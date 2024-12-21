const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user");
const sequelize = require("./util/database");

const app = express();

app.use(cors());

app.use(express.json());

app.use(userRoutes);

sequelize
    .sync()
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => {
        console.log(err);
    });
