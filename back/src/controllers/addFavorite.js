const favs  = require('../utils/favs');

const addFavorite = (res,character)=>{

    if(!character) throw new Error('No se pudo agregar el personaje')
    favs.push(character)
    return favs
}

module.exports = addFavorite;