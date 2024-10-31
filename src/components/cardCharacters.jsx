


export default function Cardharacters({ name, species, status, image, children, loading }) {

    const isAlive = status

    if (loading) return <h2>LOADING...</h2>

    return (
        <article className='bg-slate-900 text-white rounded-md overflow-hidden hover:scale-105 transition-all'>

            <img src={image} alt={name} className="w-full h-80 object-cover" />

            <div className="p-3">
                <h2>{name}</h2>
                <p>Specie: {species}</p>
                <p>Status: <span className={`status ${isAlive}`}></span> {status}</p>
                {children}
            </div>
        </article>
    )
}