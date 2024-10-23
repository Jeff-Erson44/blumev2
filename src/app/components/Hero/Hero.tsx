import { Button } from '../Button/Button'
import './_Hero.scss'
import Spline from '@splinetool/react-spline';

export const Hero = () => {
    return(
        <>
            <div className='containerHero__highlighText'>
                <h1>l'authenticité <br />au service du luxe</h1>
                <h2>Blume < br/>
                Sécurisez et authentifiez vos produits de luxe de seconde main grâce à notre solution blockchain innovante et fiable, assurant transparence et confiance pour acheteurs et vendeurs.
                </h2>
                <Button 
                    text='Get Started'
                />
            </div>
            <div className='containerHero__image'>
                <Spline
                    scene="/image/scene.splinecode"
                    style={{ width: '100%', height: '500px' }}
                />
            </div>
        </>
    )
}