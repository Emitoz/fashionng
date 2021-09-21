export const FormInput = ({ isTextArea, type, placeholder, name, value, onChange, required }) => {
    return (
        <>
            { 
                !isTextArea ? 
                <input 
                    className="input input-dark" 
                    type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange}
                    required={required}
                /> 
                :
                <textarea 
                    name={name} 
                    className="input input-dark" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange}
                    required={required}
                ></textarea>
            }
        </>
    )
}