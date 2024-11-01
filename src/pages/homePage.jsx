import { useEffect, useState } from "react"
import Cardharacters from "../components/cardCharacters"
import getCharacters from "../services/getCharacters"
import '../App.css'



export default function HomePage() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters('https://rickandmortyapi.com/api/character')
            .then(character => {
                const filtering = character.results
                const filtered = filtering.filter(charac => charac.id > 6 && charac.id <= 12)
                setCharacters(filtered)
            })
    }, [])

    console.log(characters)


    return (
        <main className="container mx-auto p-2 md:p-0">
            <h1 className="text-4xl mb-5 text-teal-500 font-bold">Home Page</h1>
            <section className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    characters.map(character => (
                        <Cardharacters
                            key={character.id}
                            name={character.name}
                            image={character.image}
                            species={character.species}
                            status={character.status}
                            className='flex flex-col md:flex-row md:items-center card-home'
                        >
                            <div className="p-3">
                                <h2>{character.name}</h2>
                                <p>Specie: {character.species}</p>
                                <p>Status: <span className={`status ${character.status}`}></span> {character.status}</p>
                            </div>
                        </Cardharacters>
                    ))
                }
            </section>
        </main>
    )
}