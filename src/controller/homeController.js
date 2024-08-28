
import userService from "../service/userService";

const handleHelleWord = (req, res) => {
    return res.render("home.ejs");
}
const handleUserPage = async (req, res) => {
    const listUser = await userService.selectUser();
    return res.render("user.ejs", { listUser });
}
const handleCreateNewUser = async (req, res) => {
    let email = req.body.emailName;
    let name = req.body.useName;
    let passWord = req.body.passWordName;
    await userService.createNewUser(email, name, passWord)
    return res.redirect("/user");
}

// delete handle
const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

// redirect update page
const UpdatePage = async (req, res) => {
    const idUser = await req.params.id;
    const User = await userService.selectById(idUser)

    return res.render("updateUser.ejs", { User })
}
// handle update
const handleUpdatePage = async (req, res) => {
    let idUser = req.params.id;
    const emailName = req.body.emailName;
    const username = req.body.useName;

    userService.updateUser(emailName, username, idUser);
    return res.redirect("/user");
}


module.exports = { handleHelleWord, handleUserPage, handleCreateNewUser, handleDeleteUser, UpdatePage, handleUpdatePage };