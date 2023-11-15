https://github.com/leandrofiadone/Pokemon-PI/blob/main/api/src/utils/Globales.js

Enunciado general:
-buscar pokemones✔
-visualizar info✔
-filtrarlos-✔
-ordernarlos✔
-crear nuevos✔

Endpoints:
-id✔
-name-✔
-type✔

agregar comentarios
2cambiar todo el diseño UI/UX	

3arreglar funcionar para buscar en la bd



Rutas-Back:
-/pokemons 
  obtener pokemones✔

-/pokemons/:id
  obtener los detalles de un poke✔
  mon recibido por param✔
  tiene qeu incluir los datos del tipo✔
  de pokemon
  debe funcionar para los pokemons de la base
  de datos y de la api ✔

-/pokemons/name?
obtener los pokemons que coinciden con el nombre ✔
buscar independiente de mayus o minusculas ✔
si no existe mostrar mensaje adecuado ✔ 
debe buscar en la api y db ✔

-post /pokemons
recibir todos los datos necesarios ✔
recibir la info por body ✔
crear un pokemon en la base de la db y
relacionar sus tipos ...✔

-get /types 
obtiene un arreglo con todos los tipos de pokemons✔
cuando la db esta vacia los recibe y crea ✔
deben venir de la api y no ser hardcodeados✔

FRONT END: CAMBIAR DISEÑO UX UI 

-landing page:
img de fondo✔ cambiar
btn de ingresar a home ✔

-home page:
searchbar -buscar por nombre exacto✔
cards con pokemons(name img type)✔
ver detalles de pokemon al clickear la card✔
filtrar por tipo, o por creado en api o db✔
ordenar en asc o desc✔
orden alfabetico y por ataque✔
paginado -listado de 12 por pagina✔

Detalles Pagina:
mostrar detalles del pokemon✔

Form Page:
completar detalles del pokemon✔
el nombre del pokemon no puede tener nums✔
la def no puede exceder determinado valor✔
crear mi propia validacion ✔

Testing:	

un componente del fornt X
dost rutas del back     X
1 modelo de la base     X