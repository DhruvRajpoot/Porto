const FeatureCard = (props) => (
    <div style={{padding: '3rem 2rem',background:"white",textAlign:"center",boxShadow:'0 0 5px .1px #505050'}}>
        <img src={props.logo} alt="" style={{ maxWidth: "4rem", marginBottom: '2rem' }} />
        <p style={{fontWeight: '600', fontSize: "1.3rem" }}>{props.heading}</p>
        <p style={{fontSize: "1rem",margin: "1.5rem 0 0 0" }}>{props.message}</p>
    </div>
);
export default FeatureCard;