import Carousel from './Carousel'
import hero1 from '../images/hero1.jpg'
import hero2 from '../images/hero2.jpg'
import Feature from './Feature'

const images = [hero1, hero2]
const Hero = () => (
    <>
        <div style={{ background: '#2a2a2a', maxHeight: 'calc(15rem + 12vw)', zIndex: '1', paddingTop: '1rem',position:'relative'}}>
            <Carousel images={images} width='87%' height='calc(18rem + 17vw)' />
            
        </div>
        <Feature />
    </>
);
export default Hero;