import { SoluCard } from '../assets/SoluCard/SoluCard'
import './_Solution.scss'

export const Solution = () => {
    return (
        <section className='containerSolution'>
            <div className='containerSolution__highlight'>
                <h1>Une solution innovante</h1>
                <h2>Nous croyons en un marché du luxe de seconde main où chaque transaction est sûre et chaque produit authentique. Grâce à notre technologie blockchain, nous sécurisons la traçabilité, garantissant aux acheteurs et vendeurs une totale confiance.</h2>
            </div>
            <div className='containerSolution__card'>
                <SoluCard />
            </div>
        </section>
    )
} 