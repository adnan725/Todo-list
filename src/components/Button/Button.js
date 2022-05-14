import './Button.css'
function Button(props) {
    return <div>
        <button className={props.className} onClick={props.onClick}>
            {props.children}
        </button>
    </div>
}

export default Button