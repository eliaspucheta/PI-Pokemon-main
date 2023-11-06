import {
    GET_POKEMONS,
    GET_ALL_TYPES,
    FILTER_CREATED,
    ORDER_NAME,
    FILTER_TYPE,
    ORDER_STR,
    GET_POKEMON_NAME,
    POST_POKEMON,
    GET_DETAILS,
    CLEAN_DETAIL,
    CLEAN_POKEMONS
} from '../actions/actions';

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    pokeDetail: []
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            };
        case CLEAN_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            };
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case FILTER_CREATED: {

            let copy = state.allPokemons
            let createdFiltered
            
            if(action.payload === 'created') {
                createdFiltered = copy.filter(e => e.createdInDb)
            } else if(action.payload === 'api') {
                createdFiltered = copy.filter(e => !e.createdInDb)
            } else {
                createdFiltered = copy
            }
            return {
                ...state,
                pokemons: createdFiltered
            };
        }
        case FILTER_TYPE: {

            let copy2 = state.pokemons
            let typeFiltered = action.payload === 'all' ? copy2 : copy2.filter(e => e.types.some(e => e.name === action.payload))    
            
            if(typeFiltered){
                typeFiltered = copy2;
                alert('There are with the indicated type')
            }
            return {
                ...state,
                pokemons: typeFiltered
            };
        }
            case ORDER_NAME: {

                let copy3 = state.pokemons;
                let sortedName = action.payload === 'asc' ?
                copy3.sort((a, b) => {
                    return a.name.toLowerCase().tolocaleCompare(b.name.toLowerCase())
                }) :
                copy3.sort((a, b) => {
                    return b.name.toLowerCase().tolocaleCompare(a.name.toLowerCase())
                })
                return {
                    ...state,
                    pokemons: sortedName
                };
            }
        case ORDER_STR: {
            
            let copy4 = state.pokemons
            let sortedStr = action.payload === 'asc' ?
            copy4.sort((a, b) => a.attack - b.attack) :
            copy4.sort((a, b) => b.attack - b.attack);
            return {
                ...state,
                pokemons: sortedStr
            };
        }
            case GET_POKEMON_NAME:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                pokeDetail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                pokeDetail: action.payload
            }
        case POST_POKEMON: 
            return {
                ...state
            };
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;