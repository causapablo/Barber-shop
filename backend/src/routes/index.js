const { Router } = require('express');
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemon', async (req, res) => {
    let { asyncMethod } = req.query;
    if(asyncMethod==="promise"){
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1126')
        .then(results => res.send(results.data.results))
        .catch(error => console.log(error));
    }else if(asyncMethod==="asyncawait"){
        try{
            const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1126");
            res.send(pokemons.data.results);
        }catch(error){
            res.send(error);
        }
    }
})

module.exports = router;
