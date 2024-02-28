function Input(props) {
    return (
        <input type="text" name="" id="" placeholder={props.input} value={props.value} onChange={props.onChange}
        style={{
            color:'gray',
            borderRadius:'5px',
            backgroundColor:'white',
            border:'none',
            padding:'10px 15px',
        }}/>        
    )
}
export default Input;