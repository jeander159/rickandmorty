const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'
const getCharById = async (res,id) => {
    // fetch('https://rickandmortyapi.com/api/character/1')
    // .then(data=>console.log(data))

    try{
        const charById = await axios.get(`${URL}${id}`)
        const dataCharById = charById.data
        // console.log(dataCharById)
        const objCharacter={
            id:dataCharById.id,
            image:dataCharById.image,
            name:dataCharById.name,
            gender:dataCharById.gender,
            species:dataCharById.species,
        }
        res.status(200).json(objCharacter)
    }catch(e){
        res.status(500).json({error:e.message})
    }

    // axios.get(`${URL}${id}`)
    // .then((response)=>{
        
    //     const objCharacter={
    //         id:response.data.id,
    //         image:response.data.image,
    //         name:response.data.name,
    //         gender:response.data.gender,
    //         species:response.data.species,
    //     }
    //     // res.writeHead(200,{'Content-Type':'application/json'})
    //     // res.end(JSON.stringify(objCharacter))
    //     res.status(200).json(objCharacter)
        
    // }).catch(error=>{
    //     // res.writeHead(500,{'Content-Type':'text/plain'})
    //     // res.end(error.message)
    //     res.status(500).json({error:error.message})
    // })

}

module.exports=getCharById;