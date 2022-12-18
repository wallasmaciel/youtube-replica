export function ButtonSimple(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button type="button" { ...props } 
            className={ `ring-zinc-800 py-2 px-3 rounded-full hover:bg-zinc-700 transition-colors active:bg-zinc-600 outline-0 ${props.className}` }>
            { props.children }
        </button>
    )
}