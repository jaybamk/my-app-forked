
const Button = () => {
    const onClick = () => {
        console.log('clicked')
        alert('clicked')
    }
    return <button onClick={onClick}>Click me!</button>

}


export default Button