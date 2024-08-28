import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
// import connection from "./config/connectDB";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 8081;
// config view engine
configViewEngine(app);

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connection();

// int web routes
initWebRoutes(app);



app.listen(PORT, () => {
    console.log("sussece!!!" + PORT)
});