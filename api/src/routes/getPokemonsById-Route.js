const { Router } = require('express');
//const { getAllPokemons } = require('../Controllers/getAllPokemons')
 
const router = Router()

router.get('/', async (req, res) => {
    // console.log(req);
    // const id = req.params

    // res.status(200).json(id)


              const id = req.params
        
             if(id) return res.status(200).send(id)
             else return 'no se ha encontrado ningun id'
         })
//})


module.exports = router