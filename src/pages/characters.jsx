import { useEffect, useState } from "react"
import getCharacters from "../services/getCharacters"
import Cardharacters from "../components/cardCharacters"
import { Link, useParams } from "react-router-dom"


export default function Characters() {

    let { page } = useParams()

    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setInfo(true)
        setLoading(true)
        getCharacters(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(character => {
                setCharacters(character.results)
                setInfo(character.info)
                setLoading(false)
            })
    }, [page])

    if (loading) return <div className="loader flex justify-center items-center mx-auto"></div>

    return (
        <main className="container mx-auto px-2 md:px-0">
            {/* <h1>Todos los Personajes</h1> */}
            <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
                {
                    characters.map(character => (
                        <Cardharacters
                            key={character.id}
                            image={character.image}
                            status={character.status}
                            className=''
                        >
                            {/* <img src={character.image} alt={character.name} className="object-cover w-full" /> */}
                            <div className="p-3">
                                <h2>{character.name}</h2>
                                <p>Specie: {character.species}</p>
                                <p>Status: <span className={`status ${character.status}`}></span> {character.status}</p>
                                <Link className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 transition-all" to={`/character/details/${page}/${character.id}`}>Ver más</Link>
                            </div>
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