const favs  = require('../utils/favs');
const delFavorite = (id)=>{

    // if(!id) return res.status(500).json({error:'falta el id'})
    // const characterFind = favs.find(character => character.id !== Number(id));

    // if(!characterFind) return res.status(400).json({error:'No se encontrol el personaje'})
    // return res.status(200).json({message:'eliminado correctamente'})

    if(!id) throw new Error('falta el id')
    const characterFind = favs.find(character => character.id !== Number(id));

    if(!characterFind) throw new Error('No se encontrol el personaje')
    return favs;
}
module.exports = delFavorite;