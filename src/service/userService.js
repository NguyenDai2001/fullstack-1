import bcrypt from "bcrypt";
import mysql from 'mysql2/promise';

//connent data base
const handleConnection = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'fullstack-1',
    });
}


const hashPassWord = (userPassWord) => {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(userPassWord, saltRounds);
    return hash;
};

const createNewUser = async (email, name, passWord) => {
    let passWordNew = await hashPassWord(passWord);
    let connection = await handleConnection();
    try {
        const [results] = await connection.query(
            'INSERT INTO `users` (email,password,username) VALUES(?,?,?)', [email, passWordNew, name]
        );
    } catch (err) {
        console.log(err);
    }
}

const selectUser = async () => {
    let connection = await handleConnection();
    let user = []
    try {
        const [results] = await connection.query(
            'SELECT * FROM users'
        );
        user = [...results];
        return user;
    } catch (err) {
        console.log(err);
        return user;
    }
}

module.exports = { createNewUser, hashPassWord, selectUser };