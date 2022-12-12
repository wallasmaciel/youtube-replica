export function ButtonSimple(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button type="button" { ...props } className={ `ring-state-600 py-2 px-3 rounded-full hover:bg-state-700 transition-colors active:bg-state-600 ${props.className}` }>
            { props.children }
        </button>
    )
}