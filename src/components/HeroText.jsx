const HeroText = () => {
  return (
    <div className="d-flex justify-content-end align-items-center" style={{width:'50%' ,height: 'calc(15rem + 16vw)',position:"absolute",bottom:'0',right:'0',background:"#3c3c3cf0",padding:'0 3vw'}}>
                    <div className='text-light text-center text-lg-end'>
                        <h1 style={{fontSize:'calc(.8rem + 2.2vw)',letterSpacing:'.25rem',textShadow:'2px 0'}}>Arch Design Studio</h1>
                        <p style={{fontSize:'calc(.6rem + .5vw)',letterSpacing:'.1vw'}}>A Very Personal Approach to Every Client</p>
                        <p style={{fontSize:'calc(.5rem + .5vw)'}}>Elegant solutions to complex problems</p>
                        <button style={{fontSize:'calc(.5rem + .3vw)',padding:'calc(.3rem + .4vw) calc(.5rem + 1vw)',background:'#151515',color:'white',outline:'1px solid #151515',outlineOffset:'.5vw',margin:'5px'}}>GET STARTED</button>
                    </div>
            </div>
  )
}

export default HeroText
