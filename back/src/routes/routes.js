// const http = require('http')
// // const data = require('../utils/data.js')
// const onsearch = require('../controllers/getCharById.js')
// const detail = require('../controllers/getCharDetail.js')

// http.createServer((req,res)=>{

//     // console.log('servidor corriendo en el puerto 3001')
//     // res.setHeader('Access-Control-Allow-Origin', '*');//permite el accceso de cualquier orginen que haga peticion a mi servidor
    
//     // if(req.url.includes('rickandmorty/character/')){
//     //     let id = req.url.split('/').at(-1);
//     //     let character = data.find(char=>char.id === Number(id))
//     //     res.writeHead(200,{'Content-Type':'application/json'})
//     //     res.end(JSON.stringify(character))
//     // }

//     let id = req.url.split('/').at(-1);
    
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes('onsearch')){
//         onsearch(res,id)
//     }
//     if(req.url.includes('detail')){
        
//         detail(res,id)
//     }

// }).listen(3001,'127.0.0.1')


const router = require("express").Router();
const getCharById = require('../controllers/getCharById.js')
const getCharDetail = require('../controllers/getCharDetail.js')
const getFavorite = require('../controllers/getFavorite.js')
const addFavorite = require('../controllers/addFavorite.js')
const delFavorite = require('../controllers/delFavorite.js')

const getAllChars = require('../controllers/getAllChars.js')


router.get('/rickandmorty/character/:id',(req,res)=>{
    
    const {id} = req.params;
    getCharById(res,id)
 })
 
 router.get('/rickandmorty/detail/:id',(req,res)=>{
    
    const {id} = req.params;
    getCharDetail(res,id)
 })
 

 router.get('/rickandmorty/fav',(req,res)=>{
   
    getFavorite(res)
 })

 router.post('/rickandmorty/fav',(req,res)=>{
   
   // const { character } = req.body;
   // console.log(character)
   // console.log(console.log(req.body))
   try{
      let response = addFavorite(res,req.body)
      res.status(200).json(response)
   }catch(e){
      
      res.status(400).json({error:e.message})
   }
   // addFavorite(res,character)
})
router.delete('/rickandmorty/fav/:id',(req,res)=>{
   
   try{
      const {id} = req.params;
      let response = delFavorite(id)
      res.status(200).json(response)
   }catch(e){
      res.status(400).json({err:e.message})
   }
})

router.get('/rickandmorty/allCharacters',(req,res)=>{
   
   try{
      
      let allChars = getAllChars()
      res.status(200).json(allChars)
   }catch(e){
      res.status(400).json({err:e.message})
   }
})

module.exports = router;