import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonsAction } from "../../../../redux/pokemons/action"

const HomeBtn = () =>{

    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)

    const btnClick = () => {
        
        useEffect(() => {
            dispatch(getPokemonsAction())
        })
    }

    return(
        <div>
            <button onClick={btnClick}>
                {pokemons}
            </button>
        </div>
    )
}

export default HomeBtn