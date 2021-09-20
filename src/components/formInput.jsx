export const FormInput = ({ isTextArea, type, placeholder, name, value, onChange }) => {
    return (
        <>
            { 
                !isTextArea ? 
                <input className="input input-dark" type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/> 
                :
                <textarea name={name} className="input input-dark" placeholder={placeholder} value={value} onChange={onChange}></textarea>
            }
        </>
    )
}