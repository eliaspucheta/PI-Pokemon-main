import { Provider, useDispatch} from 'react-redux'

export default function Home() {
    const dispatch = useDispatch()
    //const allPokemons = useSelector((state) => state.pokemons)


    return (
        <div>
            <h1>
                Esto es Home!
            </h1>
            <h1>
                Bienvenido!
            </h1>
        </div>
    )
}