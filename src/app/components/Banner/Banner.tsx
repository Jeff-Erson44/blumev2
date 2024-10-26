import { Button } from "../assets/Button/Button"
import Image from "next/image"
import './_Banner.scss'

export const Banner = () => {
    return (
        <section className="containerBanner">
            <h1>Découvrez Blume</h1>
            <div className="containerBanner__highlight">
                <Image 
                    src='/image/puce.png'
                    alt=''
                    width={150}
                    height={150}
                />
                <div className="containerBanner__highlight__info">
                    <p>Chez Blume, nous révolutionnons le marché du luxe de seconde main en garantissant authenticité et sécurité grâce à la blockchain et aux puces NFC, pour une solution transparente et infalsifiable.</p>
                    <Button 
                        text="Découvrez"
                    />
                </div>
            </div>
        </section>
    )
}