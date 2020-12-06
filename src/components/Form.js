import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../App.css';
import './Form.css'

export default class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reCaptchaResponse: '',
            reCaptchaSuccess: false
        }
        this.nameElm    = React.createRef();
        this.emailElm   = React.createRef();
        this.phElm      = React.createRef();
        this.commentElm = React.createRef();

        this.handleSubmit   = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({
            reCaptchaResponse: value
        })
        console.log("Captcha value:", value);
    }

    handleSubmit(e) {
        //get form data submitted by user
        const formData = [
            'Name: ' + this.nameElm.current.value + '\n',
            'Email: ' + this.emailElm.current.value + '\n',
            'Ph#' + this.phElm.current.value + '\n',
            'comment:' + this.commentElm.current.value + '\n'
        ];

        //prevent browser reload etc.
        e.preventDefault();

        if (!this.state.reCaptchaResponse || this.state.reCaptchaResponse.length < 4){
            console.log('captcha state', this.state.reCaptchaResponse);
            return (
                alert('Captcha is Required ^_^')
            )
        }

        alert(formData);
        console.log('Bob this is e ... ', e);
    }

    render() {
        return (
            <div className="my-class-form-wrapper">
                <form className={'my-class-form'} onSubmit={this.handleSubmit}>
                    <div className="my-form-container">
                        <h1 className="">Send your Feedback!</h1>
                        <label className={'form-label-flex'}><p>Name:</p>
                            <input className={'form-input-flex single-line'} type="text" ref={this.nameElm} placeholder={'Required.'} required={true} />
                        </label>
                        <label className={'form-label-flex'}><p>Email:</p>
                            <input className={'form-input-flex single-line'} type="email" ref={this.emailElm} placeholder={'Required.'} required={true} />
                        </label>
                        <label className={'form-label-flex'}><p>Ph#:</p>
                            <input className={'form-input-flex single-line'} type="phone" ref={this.phElm} placeholder={'Optional...'} autoComplete={"off"} />
                        </label>
                        <label className={'form-label-flex'}><p>Comment:</p>
                            <textarea className={'form-input-flex multi-line'} type="textarea" ref={this.commentElm} placeholder={'Optional...'} />
                        </label>
                        <div className={'contact-recaptcha'}>
                            <ReCAPTCHA
                                sitekey="6LfTvfsZAAAAABn_rPS3cUCcXZ9oHVsqN_HGwTxp"
                                onChange={this.handleOnChange}
                                required={true}
                            />
                        </div>
                        <input type="submit" className="form-label-flex"/>
                    </div>
                </form>
            </div>
        )
    }
}