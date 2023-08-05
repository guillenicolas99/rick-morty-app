export default function Pagination ({ info, changeCharacter }) {
    return (
        <section>
            {info.prev !== null && <button onClick={() => { changeCharacter(info.prev) }} >Prev</button>}
            {info.next !== null && <button onClick={() => { changeCharacter(info.next) }}>Next</button>}
        </section>

    )
}