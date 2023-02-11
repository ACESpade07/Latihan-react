function Introduction(props){
    console.log('parameter pengirim: ', props.name)
    return (
        <div>
            <h1> Belajar React</h1>
            <p> hello my name is : {props.name}</p>
        </div>
    );
}
export default Introduction;