import express from "express";
import homeController from "../controller/homeController"
const router = express.Router();
/**
 * 
 * @param {*} app: express app
 */

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelleWord);
    router.get("/about", (req, res) => {
        return res.send("about")
    });
    router.get("/use", homeController.handleUserPage);


    return app.use("/", router);
}

export default initWebRoutes;