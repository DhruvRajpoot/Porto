import interior from '../images/interior-design.png'
import FeatureCard from './FeatureCard'

const Feature = () => (
    <div className='d-flex justify-content-center' style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20190331/pngtree-vector-white-abstract-background-design-templates-collection-wit-image_94438.jpg)' }}>
        <div className="row container-lg justify-content-center" style={{ zIndex: '10', padding: '0 3vw', margin: 'calc(10rem - 8vw) 0 0 0' }}>
            <div className="col-lg-4 col-sm-6 my-3"><FeatureCard logo={interior} heading={'Design & Planning'} message={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'} /></div>
            <div className="col-lg-4 col-sm-6 my-3"><FeatureCard logo={interior} heading={'Interior Design'} message={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'} /></div>
            <div className="col-lg-4 col-sm-6 my-3"><FeatureCard logo={interior} heading={'Exterior Design'} message={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'} /></div>
        </div>
    </div>
);
export default Feature;