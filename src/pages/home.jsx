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
                const filtered = filtering.filter( charac => charac.id > 6 && charac.id <= 12)
                setCharacters(filtered)
            })
    }, [])


    return (
        <main className="main-home">
            <h1>Home Page</h1>
            <section className="characters-grid">
                {
                    characters.map(character => <Cardharacters
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        image={character.image}
                    />)
                }
            </section>
        </main>
        )
}