function Button(props) {
    return <button style={{
        color:'#082A39',
        borderRadius:'25px',
        backgroundColor:'#DFBEA9',
        // backgroundColor:'beige',
        border:'none',
        // borderColor:'beige',
        padding:'7px 15px',
        fontSize:'13px',
        fontFamily:'Segoe UI',
        fontWeight:'bold',
    }} onClick={props.onClick}> {props.name} </button>
  }
  export default Button;