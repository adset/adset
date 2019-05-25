import React, {Component} from 'react';

import "./App.css";

const user = {};

class Button extends Component {
    onSubmit = () => {
        user.firstName = this.props.userInfo.firstName;
        user.lastName = this.props.userInfo.lastName;
        user.email = this.props.userInfo.email;
        user.password = this.props.userInfo.password;
        user.phone = `${this.props.userInfo.country}${this.props.userInfo.phone}`;
        alert(`userData:: name::${user.firstName} surname::${user.firstName}  email::${user.email} password::${user.password} phone::${user.phone}`);
    }
    render() {
        const {buttonName, isValid} = this.props;
        return (
            <div >
                <button onClick={this.onSubmit} className="button" disabled={!isValid}>{buttonName}</button>
            </div>
        );
    };
}

export default Button;