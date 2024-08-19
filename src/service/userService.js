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
            'INSERT INTO `users` (email,password,username) VALUES(?,?,?)', [email, name, passWordNew]
        );
    } catch (err) {
        console.log(err);
    }
}

module.exports = { createNewUser, hashPassWord };