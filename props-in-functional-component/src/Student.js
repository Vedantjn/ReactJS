function Student(props){
    // console.warn(props)
    return(
        <div style={{backgroundColor : "skyBlue", margin : 10}}>
            <h1>Student {props.name}</h1>
            <h2>Email : {props.email}</h2>
            <h4>Address : {props.other.address}</h4>
        </div>
    )
}

export default Student