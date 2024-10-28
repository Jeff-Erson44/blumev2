import { SolutionCard } from '@/data/SolutionCard.data'
import './_SoluCard.scss' 


export const SoluCard = () => {
    return (
        <div className="containerSolutionCard">
            {SolutionCard.map((soluce) => (
                <div key={soluce.id} className='card'>
                    <p className="number">{soluce.number}</p>
                    <h2 className='title'>{soluce.title}</h2>
                    <p>{soluce.text}</p>
                </div>
            ))}
        </div>
    )
}
