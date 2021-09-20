export const Button = ({ theme, text, icon, clickHandler, type }) => {
    return (
        <button 
            onClick={clickHandler}
            className={`button button-${theme}`}
            type={type}>
            {text}
            { icon &&  <i className={icon}></i>}
        </button>
    )
}