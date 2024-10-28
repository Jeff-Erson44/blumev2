import { Button } from '../assets/Button/Button';
import './_Garanti.scss';
import Image from 'next/image';

export const Garanti= () => {
    return(
        <section className='containerGaranti'>
            <h1>La garantie d&apos;authenticité et de sécurité</h1>
            <div className='containerGaranti__highlight'>
                <div className='containerGaranti__highlight__text'>
                    <p>Chaque produit est inscrit sur notre blockchain, créant un passeport digital infalsifiable avec toutes ses informations essentielles. Une puce NFC, intégrée discrètement, est reliée à ce certificat pour une vérification simple via smartphone. Les données, cryptées et protégées sur la blockchain, assurent une traçabilité inaltérable et une sécurité optimale. Avec Blume, chaque produit de luxe de seconde main est authentique, traçable et sécurisé, garantissant une expérience d&apos;achat et de vente unique.</p>
                    <Button 
                        text="Vérifier l'authenticité"
                    />
                </div>
                <Image 
                    src="/image/bag.png"
                    alt=""
                    width={360}
                    height={300}
                />
            </div>
        </section>
    )
} 