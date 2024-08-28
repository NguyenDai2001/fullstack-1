import express from "express";
import homeController from "../controller/homeController"
const router = express.Router();
/**
 * 
 * @param {*} app: express app
 */

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelleWord);
    router.get("/user", homeController.handleUserPage);
    router.post("/user/create-user", homeController.handleCreateNewUser);
    router.post("/user/delete-user/:id", homeController.handleDeleteUser);
    router.get("/update-user-page/:id", homeController.UpdatePage);
    router.post("/user/update-user-page/:id", homeController.handleUpdatePage);

    return app.use("/", router);
}

export default initWebRoutes;