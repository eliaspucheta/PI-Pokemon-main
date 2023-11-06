const { Router } = require("express");
const { Type } = require("../db");
const { default: axios } = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  try {
    //realizo una peticion get con axios a la api
    let typeFromApi = await axios("https://pokeapi.co/api/v2/type");
    //selecciono la parte que necesito, generalmente es data
    let typeFromApiData = typeFromApi.data;

    let types = typeFromApiData.results.map((type) => {
        return { name: type.name };
      });

    //hago un mapeo de los resultados para filtrarlos por nombre
    //let types = await typeFromApiData.results
        //.map((e) => e.name);

    // for (let type of types) {
    //     //const typeData = await axios(type.url)
    //     delete type.url
    //     //type.id = typeData.data.id
    //   }

    //los busco/creo en mi base de datos
    await types.forEach((type) => {
      Type.findOrCreate({
        where: {
          name: type.name
        },
      });
    });

    //guardo todos los type disponibles en una variable
    const typesGroup = await Type.findAll();
    
    //le aplico un mapeo para seleccionar solo los nombres
    //const mapeo = await typesGroup.map((e) => e.name);
    //retorno el resultado
    return res.status(200).json(typesGroup);
  } catch (error) {
    return error.message;
  }
});

module.exports = router;
