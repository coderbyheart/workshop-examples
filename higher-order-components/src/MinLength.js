import React from 'react';

export const InputWithMinlength = minLength => {
    return (InputComponent) => {
        return (props) => { // props.value
            console.log(props.value, 'minlength')
            if (props.value.length > minLength) {
                return (
                    <div>
                        <InputComponent {...props}/>
                    </div>
                )
            } else {
                return (
                    <div>
                        <InputComponent {...props}/>
                        <span style={{color: 'red'}}>Fehler: mind. {minLength} Zeichen</span>
                    </div>
                )
            }

        }
    }
}

export const InputWithMaxlength = maxLength => {
    return (InputComponent) => {
        return (props) => { // props.value
            if (props.value.length < maxLength) {
                return (
                    <div>
                        <InputComponent {...props}/>
                    </div>
                )
            } else {
                return (
                    <div>
                        <InputComponent {...props}/>
                        <span style={{color: 'red'}}>Fehler: max. {maxLength} Zeichen</span>
                    </div>
                )
            }

        }
    }
}

export const ValidatingInputComponent = (validator, errorHandler) => {
    return (InputComponent) => {
        return (props) => { // props.value
            if (validator(props.value)) {
                return (
                    <InputComponent {...props}/>
                )
            } else {
                return (
                    <div>
                        <InputComponent {...props}/>
                        <span style={{color: 'red'}}>Fehler: {errorHandler(props.value)}</span>
                    </div>
                )
            }
        }
    }
}