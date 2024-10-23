import './_LatestNews.scss'
import { Card } from '../assets/Card/Card'

export const LatestNews = () => {
    return(
        <>
            <section className='containerLatest'>
                <h1>Our latest < br/> news.</h1>
                <div className='containerLatest__menu'>
                    <ul>
                        <li>
                            <a>
                                all
                            </a>
                        </li>
                        <li>
                            <a>
                                cases
                            </a>
                        </li>
                        <li>
                            <a>
                                news
                            </a>
                        </li>
                        <li>
                            <a>
                                testimony
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='containerLatest__blog'>
                    <Card />
                </div>
            </section>
        </>
    )
}