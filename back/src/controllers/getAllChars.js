const { Character } = require('../DB_connection.js');

const getAllChars = async () =>{
    const allCharacters = await Character.findAll();
    return allCharacters;
}

module.exports = getAllChars;