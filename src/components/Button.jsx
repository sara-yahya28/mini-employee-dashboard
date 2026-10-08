import '../components/css/Button.css'

export default function Button({
    children,
    onClick,
    variant = 'primary',
    type = 'button',
    ...rest
}) {
    return (
        <button className={`btn btn--${variant}`}
            onClick={onClick}
            type={type}
            {...rest}//any other props
        >
            {children}
        </button>
    )
}