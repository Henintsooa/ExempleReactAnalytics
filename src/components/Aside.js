import Button from "./Button";
import Input from "./Input";
import React, { useState } from "react";
function Aside(props) {
    const [minPriceInput, setMinPriceInput] = useState("");
    const [maxPriceInput, setMaxPriceInput] = useState("");
    const filterProducts = () => {
        const minPrice = parseFloat(minPriceInput);
        const maxPrice = parseFloat(maxPriceInput);
      
        // Appeler la fonction de filtrage du composant parent avec les valeurs min et max
        props.filterProducts(minPrice, maxPrice);
      };
      
    return (
        <>
        <h4 style={{color:'white'}}>Filter</h4>
        <div>
        <p style={{color:'white'}}> {props.titre1} 
        <Input input={props.input1} value={minPriceInput} onChange={(e) => setMinPriceInput(e.target.value)} /> 
        </p>       
        <p style={{color:'white'}}> {props.titre2}  
        <Input input={props.input2}  value={maxPriceInput} onChange={(e) => setMaxPriceInput(e.target.value)}/> 
        </p>      
        </div>
        <div>
        <Button name={props.button}  onClick={filterProducts}></Button>
        </div>
        </>
    )
}
export default Aside;