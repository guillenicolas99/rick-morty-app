


export default function Cardharacters({ name, image, children, className }) {
    const childrenClass = className ? className : ''

    return (
        <article className={`bg-slate-900 text-white rounded-md overflow-hidden hover:scale-105 transition-all shadow-md ${childrenClass}`}>
            <img src={image} alt={name} className="object-cover" />
            {children}
        </article>
    )
}