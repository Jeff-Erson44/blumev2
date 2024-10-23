import Link from "next/link"
import './_Button.scss'

interface ButtonProps {
    text : string,
    link? : string
}

export const Button = ({text, link='/'} : ButtonProps) => {
    return (
        <Link
            href={`${link}`}
            className="btn"
        >
            {text}
        </Link>
    )
}