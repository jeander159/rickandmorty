const axios = require('axios');
const { Character } = require('../DB_connection.js');
const URL = 'https://rickandmortyapi.com/api/character';

const getApiData = async () => {
    try {
        let allCharacterInfoApi = [];
        for(let i = 1; i < 6 ; i++){
            let apiData = await axios(`${URL}?page=${i}`)
            allCharacterInfoApi.push(apiData)
        }
        allCharacterInfoApi = await Promise.all(allCharacterInfoApi);
        let allCharacterInfoApi2 = allCharacterInfoApi.map(response => response.data.results.map(charac => {
            return {
                id: charac.id,
                name: charac.name,
                species: charac.species,
                status: charac.status,
                origin: charac.origin,
                gender: charac.gender,
                image: charac.image,
            }
        }))
        
        // console.log(allCharacterInfoApi2)
        let allCharacters = allCharacterInfoApi2.flat();
        return allCharacters;
        
    } catch (e) {
        return  {error:e.message}
    }
}

const saveApiData = async () =>{
    try {
        const characterAll = await getApiData();
        await Character.bulkCreate(characterAll);
        // return characterAll
    } catch (e) {
        return {error:e.message}
    }
}
module.exports = saveApiData;