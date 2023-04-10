import React from 'react';
import s from './FormsControl.module.css'
export const Textarea = ({input,meta, ...props}) => {
    return (
        <div className={s.formControl + ' ' + s.error}>
            <textarea {...props} {...input}/>
        </div>
    );
};
