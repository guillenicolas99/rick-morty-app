


export default function Cardharacters({ name, species, status, image, children, loading }) {

    const isAlive = status

    if( loading ) return <h2>LOADING...</h2>

    return (
        <article className='card-character' >
            
            <div>
                <img src={image} alt={name} />
            </div>
            
            <div className="card-text">
                <h2>{name}</h2>
                <hr />
                <p>Specie: {species}</p>
                <p>Status: <span className={`status ${isAlive}`}></span> {status}</p>
                {children}
            </div>
        </article>
    )
}