import { useEffect, useState } from "react"
import getCharacters from "../services/getCharacters"
import Cardharacters from "../components/cardCharacters"
import { Link, useParams } from "react-router-dom"


export default function Characters() {

    let { page } = useParams()

    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setInfo(true)
        getCharacters(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(character => {
                setCharacters(character.results)
                setInfo(character.info)
                setLoading(false)
            })
    }, [page])

    if (loading) return <h2>LOADING...</h2>

    return (
        <main className="container mx-auto">
            {/* <h1>Todos los Personajes</h1> */}
            <section className="grid grid-cols-2 space-x-5 space-y-5 md:grid-cols-3 lg:grid-cols-4">
                {
                    characters.map(character => (
                        <Cardharacters
                            key={character.id}
                            name={character.name}
                            species={character.species}
                            status={character.status}
                            image={character.image}
                            loading={loading}
                        >
                            <Link to={`/character/details/${page}/${character.id}`}>Ver más</Link>
                        </Cardharacters>)
                    )
                }
            </section>

            <footer>
                {info.prev !== null && <Link className="pagination-link" to={`/character/${parseInt(page) - 1}`}>Prev</Link>}
                {info.next !== null && <Link className="pagination-link" to={`/character/${parseInt(page) + 1}`}>Next</Link>}
            </footer>
        </main>

    )
}