import Button from "./Button";
function Header(props) {
    return (
        <>
        <div>
        <img src={props.img} alt="" srcset=""></img>
        </div> 
        <div>
        <input type="text" name="" id="" placeholder={props.input} />        
        </div>
        <div className="button">
        <Button name={props.button}></Button>
        </div>
        </>
        
    )
}
export default Header;