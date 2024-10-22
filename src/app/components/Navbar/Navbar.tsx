import './Navbar.scss'
import Link from "next/link"

export const Navbar = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        href={'/'}
                    >blume
                    </Link>
                </li>
                <li>
                    <a>
                        Book a demo
                    </a>
                </li>
            </ul>
        </nav>
    )
}