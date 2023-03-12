const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';
const getCharDetail = async (res,id) => {
    // fetch('https://rickandmortyapi.com/api/character/1')
    // .then(data=>console.log(data))
    try{
        const charDetail = await axios.get(`${URL}${id}`);
        const dataCharDetail = charDetail.data

        const objCharacter={
            id:dataCharDetail.id,
            image:dataCharDetail.image,
            name:dataCharDetail.name,
            gender:dataCharDetail.gender,
            status:dataCharDetail.status,
            origin:dataCharDetail.origin,
            species:dataCharDetail.species,     
        }
        res.status(200).json(objCharacter)
    }catch(e){
        res.status(400).json({error:e.message})
    }
    // axios.get(`${URL}${id}`)
    // .then((response)=>{
        
    //     const objCharacter={
    //         id:response.data.id,
    //         image:response.data.image,
    //         name:response.data.name,
    //         gender:response.data.gender,
    //         status:response.data.status,
    //         origin:response.data.origin,
    //         species:response.data.species,     
    //     }
    //     // res.writeHead(200,{'Content-Type':'application/json'})
    //     // res.end(JSON.stringify(objCharacter))

    //     res.status(200).json(objCharacter)

    // }).catch(error=>{
    //     // res.writeHead(500,{'Content-Type':'text/plain'})
    //     // res.end(error.message)
    //     res.status(400).json({error:error.message})
    // })

}

module.exports=getCharDetail;