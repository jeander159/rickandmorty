const favs  = require('../utils/favs');
const getFavorite = (res) => {

    try{
        res.status(200).json(favs)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}
module.exports = getFavorite