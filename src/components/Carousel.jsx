import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

const Carousel = (props) => {
    const [, ...image] = props.images
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-light " data-bs-ride="false" style={{ width: `${props.width}`, height: `${props.height}`, margin: '0 auto' }}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
                {image.map((element, index) => {
                    return <button type="button" key={index} data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index + 1} ></button>
                })}
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.images[0]} className="d-block w-100" alt="..." style={{ width: `${props.width}`, height: `${props.height}`, margin: '0 auto' }} />
                </div>

                {image.map((element, index) => {
                    return <div className="carousel-item" key={index}>
                        <img src={element} className="d-block w-100" alt="..." style={{ width: `${props.width}`, height: `${props.height}`, margin: '0 auto' }} />
                    </div>
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                <span style={{ transform: 'translate(-10vw,-2vw)' }}><BsChevronLeft /></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span style={{ transform: 'translate(10vw,-2vw)' }}><BsChevronRight /></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div  className="d-flex justify-content-end align-items-center" style={{width:'50%' ,height: 'calc(15rem + 16vw)',position:"absolute",bottom:'0',right:'0',background:"#3c3c3cf0",padding:'0 3vw'}}>
                    <div className='text-light text-center text-lg-end'>
                        <h1 style={{fontSize:'calc(.8rem + 2.2vw)',letterSpacing:'.25rem',textShadow:'2px 0'}}>Arch Design Studio</h1>
                        <p style={{fontSize:'calc(.6rem + .5vw)',letterSpacing:'.1vw'}}>A Very Personal Approach to Every Client</p>
                        <p style={{fontSize:'calc(.5rem + .5vw)'}}>Elegant solutions to complex problems</p>
                        <button style={{fontSize:'calc(.5rem + .3vw)',padding:'calc(.3rem + .4vw) calc(.5rem + 1vw)',background:'#151515',color:'white',outline:'1px solid #151515',outlineOffset:'.5vw',margin:'5px'}}>GET STARTED</button>
                    </div>
            </div>
        </div>
    )
}

export default Carousel;