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
            <section className="single-charac">

                <Link to={`/character/${page}`}>Atrás</Link>

                <Cardharacters
                    name={character.name}
                    status={character.status}
                    image={character.image}
                    species={character.species}
                >
                    <p>Gender: {character.gender}</p>
                </Cardharacters>
            </section>
        </main>
    )
}