import { useEffect, useState } from "react";
import getCharacters from "../services/getCharacters";
import { Link, useParams } from "react-router-dom";
import Cardharacters from "../components/cardCharacters";


export default function SingleCharacter() {
    const { id, page } = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        getCharacters(`https://rickandmortyapi.com/api/character/${id}`)
            .then(character => setCharacter(character))
    }, [id])

    return (
        <main className="characters-page">
            <section className="flex items-center justify-center flex-col space-y-4">

                <Link className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 transition-all" to={`/character/${page}`}>Atrás</Link>

                <Cardharacters
                    name={character.name}
                    status={character.status}
                    image={character.image}
                    species={character.species}
                    className='max-w-80'
                >
                    <div className="p-3">
                        <h2>{character.name}</h2>
                        <p>Specie: {character.species}</p>
                        <p>Status: <span className={`status ${character.status}`}></span> {character.status}</p>
                        <p>Gender: {character.gender}</p>
                    </div>
                </Cardharacters>
            </section>
        </main>
    )
}