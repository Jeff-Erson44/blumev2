import { Button } from '../Button/Button'
import './_Navbar.scss'
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
                    <Button 
                        text="book a demo"
                    />
                </li>
            </ul>
        </nav>
    )
}