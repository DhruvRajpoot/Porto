import Carousel from './Carousel'
import hero1 from '../images/hero1.jpg'
import hero2 from '../images/hero2.jpg'
import Feature from './Feature'

const images = [hero1, hero2]
const Hero = () => (
    <>
        <div style={{ background: '#2a2a2a', maxHeight: 'calc(15rem + 12vw)', zIndex: '1', paddingTop: '1rem',position:'relative'}}>
            <Carousel images={images} width='87%' height='calc(18rem + 17vw)' />
            <div  className="d-flex justify-content-end align-items-center" style={{width:'44%' ,height: 'calc(18rem + 17vw)',position:"absolute",top:'1rem',right:'6.5vw',background:"#3c3c3cf0",paddingRight:'3vw'}}>
                    <div className='text-light' style={{textAlign:"end"}}>
                        <h1 style={{fontSize:'calc(1rem + 2vw)',letterSpacing:'.25rem',textShadow:'2px 0'}}>Arch Design Studio</h1>
                        <p style={{fontSize:'calc(.8rem + .3vw)',letterSpacing:'.1rem'}}>A Very Personal Approach to Every Client</p>
                        <p style={{fontSize:'calc(.6rem + .4vw)'}}>Elegant solutions to complex problems</p>
                        <button style={{fontSize:'.8rem',padding:'calc(.5rem + .2vw) calc(.8rem + .7vw)',background:'#151515',color:'white',outline:'1px solid #151515',outlineOffset:'6px',margin:'5px'}}>GET STARTED</button>
                    </div>
            </div>
        </div>
        <Feature />
    </>
);
export default Hero;