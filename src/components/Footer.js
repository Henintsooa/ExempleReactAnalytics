
function Footer(props) {
    return (
        <>
        <div  className="links">
        <div className="foot1">
        <h5>Links</h5>
            <a href={props.href1}>{props.name1}</a> 
            <a href={props.href2}>{props.name2}</a> 
        </div> 
        <div className="foot1">
        <h5>Social Media</h5>
            <a href={props.href3}>{props.name3}</a> 
            <a href={props.href4}>{props.name4}</a> 
        </div>
        </div>
        </>
        
    )
}
export default Footer;