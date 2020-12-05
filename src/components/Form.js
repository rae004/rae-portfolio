import React from 'react';
import '../App.css';
import './Form.css'

function myForm() {
    return (
        <>
            <div className={'form-contact'}>
                <input type={'text'} className={''} placeholder={'Enter name...'} required={true} />
                <input type={'email'} className={''} placeholder={'Enter email...'} required={true}/>
                <textarea type={'textarea'} className={'form-textarea-input'} placeholder={'Write your message...'} required={true}/>
                <input type={'submit'} value={'Submit'}/>
            </div>
        </>
    )
}

export default myForm