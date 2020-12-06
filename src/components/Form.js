import React from 'react';
import '../App.css';
import './Form.css'

export default class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.nameElm    = React.createRef();
        this.emailElm   = React.createRef();
        this.phElm      = React.createRef();
        this.commentElm = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const formData = [
            'Name: ' + this.nameElm.current.value + '\n',
            'Email: ' + this.emailElm.current.value + '\n',
            'Ph#' + this.phElm.current.value + '\n',
            'comment:' + this.commentElm.current.value + '\n'
        ];
        e.preventDefault();
        alert(formData);
    }

    render() {
        return (
            <form className={'my-class-form'} onSubmit={this.handleSubmit}>
                <div className="my-form-container">
                    <h1 className="">Send your Feedback!</h1>
                    <label className={'form-label-flex'}><p>Name:</p>
                        <input className={'form-input-flex'} type="text" ref={this.nameElm} placeholder={'Please enter your name...'} required={true} autoComplete={"off"} />
                    </label>
                    <label className={'form-label-flex'}><p>Email:</p>
                        <input className={'form-input-flex'} type="email" ref={this.emailElm} placeholder={'Please enter your email...'} required={true} />
                    </label>
                    <label className={'form-label-flex'}><p>Ph#:</p>
                        <input className={'form-input-flex'} type="phone" ref={this.phElm} placeholder={'Optional...'} autoComplete={"off"} />
                    </label>
                    <label className={'form-label-flex'}><p>Comment:</p>
                        <textarea className={'form-input-flex form-textarea'} type="textarea" ref={this.commentElm} placeholder={'Optional...'} autoComplete={"off"} />
                    </label>
                    {/*<div className={'form-label-flex'}>*/}
                        <input type="submit" className="form-label-flex form-input-flex"/>
                    {/*</div>*/}
                </div>
            </form>
        )
    }
}

