import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta:{touched, error}, children, ...props}) => {
    const hasError = touched && error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}> //есть ошибка, то выводим, иначе
            пустота
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>} //если элемент был тронут touched и в meta есть error, то покажи
            span, в противном случае не показывай
        </div>
    )
}

export const Textarea = (props) => { //мы хотим достать детсрукторизацией , и оставшиеся всё оставить в props
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <textare {...input}{...restProps}/>
    </FormControl> //мыотрисовываемFormControlивнутрьпередаемchild
}

export const Input = (props) => { //мы хотим достать детсрукторизацией , и оставшиеся всё оставить в props
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}

// export const createField = (placeholder, name, validators, component, props={}, text ="") => (
//     <div>
//         <Field placeholder={placeholder} name={name}
//                validate={validators}
//                component={component}
//                {...props}
//         /> {text}
//     </div>)
