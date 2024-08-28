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
        return results;
    } catch (err) {
        console.log(err);
        return err;
    }
}


// select all
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
// select by id
const selectById = async (id) => {
    let user = {}
    let connection = await handleConnection();
    try {
        const [results] = await connection.query(
            'SELECT * FROM users WHERE id=?', [id]
        );
        user = { ...results[0] }
        return user;
    } catch (err) {
        console.log(err);
        return err;
    }
}



// delete user
const deleteUser = async (id) => {
    let connection = await handleConnection();
    try {
        const [results] = await connection.query(
            'DELETE FROM users WHERE id=?', [id]
        );
        return results;
    } catch (err) {
        console.log(err);
        return err;
    }
}

// Update data user
const updateUser = async (email, name, id) => {
    let connection = await handleConnection();
    try {
        const [results] = await connection.query(
            'UPDATE users SET email = ?, username = ? WHERE id=?', [email, name, id]
        );
        return results;
    } catch (err) {
        console.log(err);
        return err;
    }
}


module.exports = { createNewUser, hashPassWord, selectUser, selectById, deleteUser, updateUser };