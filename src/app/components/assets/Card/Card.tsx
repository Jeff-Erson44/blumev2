import './_Card.scss';
import Image from 'next/image';
import { CardData } from '@/data/Card.data';

export const Card = () => {

    return(
        <>
            {CardData.map((card) => {
                return(
                    <div className='containerCard' key={card.id}>
                        <div className='containerCard__image'>
                            <Image 
                                src={card.src}
                                alt=""
                                width={195}
                                height={140}
                                className='image__card'
                            />
                        </div>
                        <div className='containerCard__info'>
                            <div className='containerCard__info__highlight'>
                                <h2>{card.subtitle}</h2>
                                <h3>{card.date}</h3>
                            </div>
                            <p>{card.textBody}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
