import mysql from 'mysql2/promise';

// Create the connection to database




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


    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'fullstack-1',
    });

    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
            'INSERT INTO `users` (email,password,username) VALUES(?,?,?)', [email, name, passWord]
        );
        console.log("result")
        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }

    return res.send("aaaa");
}
module.exports = { handleHelleWord, handleUserPage, handleCreateNewUser };