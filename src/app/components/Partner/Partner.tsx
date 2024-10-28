import { PartnerData } from "@/data/Partner.data"
import { Button } from "../assets/Button/Button"
import Image from "next/image"
import './_Partner.scss'

export const Partner = () =>{
    return(
        <section className="containerPartner">
            <h1>Ils nous font confiance</h1>
            <h2>Nous collaborons avec des entreprises leaders partageant notre vision d&apos;innovation. Ces partenariats renforcent notre offre et assurent à nos clients des produits de luxe authentiques. Rejoindre le réseau Blume, c&apos;est accéder à une communauté d&apos;experts du marché, ouvrant des opportunités de synergies et de croissance.</h2>
            <div className="containerPartner__slider">
                {PartnerData.map((partner) =>{
                    return(
                        <div key={partner.id}>
                            <Image 
                                src={partner.source}
                                alt={partner.alt}
                                width={135}
                                height={60}
                            />
                    </div>
                    )
                })}
            </div>
            <h2>Blume recherche des collaborations avec des entreprises partageant notre passion pour l&apos;authenticité et l&apos;innovation. Rejoignez notre réseau de partenaires et contribuez à transformer le marché du luxe de seconde main. Contactez-nous dès aujourd&apos;hui.</h2>
            <Button 
                text="Devenez partenaire"
            />
        </section>
    )
}