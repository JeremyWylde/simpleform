import React from "react";

export const MyInput = ({input, meta, ...props}) => {
    const hasError =  meta.touched && meta.error

    return (
        <div>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
