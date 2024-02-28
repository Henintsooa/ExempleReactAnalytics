import Button from "./Button";
import { useEffect, useState } from "react";

function Item(props) {
    
    const [number,setNumber]=useState();
    const [img,setImg]=useState();
    // const [imgKely,setImgKely]=useState();

    useEffect(() => {
        setNumber(props.stock);
    }, [props.stock]);
    

    useEffect(() => {
        setImg(props.img);
    }, [props.img]);

    // useEffect(() => {
    //     setImgKely(props.imgKely);
    // }, [props.imgKely]);

    const handleButtonClick = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };
    
    const changeImg = (newImg) => {
        setImg(newImg)
    };
    // const changeImgKely = (newImg) => {
    //     setImg(newImg)
    // };
    return (
        <>
        <div className="bigImg">
        <img   src={img} alt="" srcset="" className="img" style={{width:'250px'}}></img>
        </div> 
        <div className="miniImg" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <img onClick={()=>changeImg(props.img1)} src={props.img1} alt="" srcset="" style={{width:'80px',}}></img>
            <img onClick={()=>changeImg(props.img2)} src={props.img2} alt="" srcset="" style={{width:'80px',}}></img>
            <img onClick={()=>changeImg(props.img3)} src={props.img3} alt="" srcset="" style={{width:'80px',}}></img>
        </div>
        <div className="descri">
            <p><h5>Price:</h5>{+" "+props.price+" Ar"}</p>
            <p><h5>Stock:</h5>{+" "+number}</p>
        </div>
        <div>
        <Button name={props.button} onClick={handleButtonClick}></Button>
        </div>
        </>
        
    )
}
export default Item;