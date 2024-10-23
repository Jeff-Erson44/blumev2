import './_LatestNews.scss'
import { Card } from '../assets/Card/Card'

export const LatestNews = () => {
    return(
        <>
            <section className='containerLatest'>
                <h1>Our latest < br/> news.</h1>
                <div className='containerLatest__menu'>
                    <ul>
                        <li>all</li>
                        <li>cases</li>
                        <li>news</li>
                        <li>testimony</li>
                    </ul>
                </div>
                <div className='containerLatest__blog'>
                    <Card />
                </div>
            </section>
        </>
    )
}