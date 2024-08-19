
import userService from "../service/userService";

const handleHelleWord = (req, res) => {
    return res.render("home.ejs");
}
const handleUserPage = (req, res) => {
    return res.render("user.ejs");
}
const handleCreateNewUser = async (req, res) => {
    let email = req.body.emailName;
    let name = req.body.useName;
    let passWord = req.body.passWordName;
    userService.createNewUser(email, name, passWord)
    return res.send("aaaa");
}

module.exports = { handleHelleWord, handleUserPage, handleCreateNewUser };