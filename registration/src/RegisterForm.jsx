import React, { Component } from 'react';

import Button from './Button/Button';
import Input from './Input/Input';
import SelectCountry from './SelectCountry';

import './App.css';

class RegisterForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPass: '',
		country: '+374',
		phone: ''
	};

	get formValidation () {
		if (this.state.firstName.length > 0 &&
			this.state.lastName.length > 0 &&
			this.state.email.length > 0 &&
			this.state.password.length > 0 &&
			this.state.confirmPass.length > 0 &&
			this.state.phone.length > 0)
			return true;
			else 
			return false;
	}

	onChangeCountry = (event) => {
		this.setState({country: event.target.value});
	}
	
	onChangeName = (event) => {
		const reg = /^[A-Za-z]{2,25}$/;
		if (reg.test(event.target.value)) {
			this.setState({firstName: event.target.value});
		} else {
			this.setState({firstName: ''});
		}
	};
	onChangeSurName = (event) => {
		const reg = /^[A-Za-z]{2,25}$/;
		if (reg.test(event.target.value)) {
			this.setState({lastName: event.target.value});
		} else {
			this.setState({lastName: ''});
		}
	};
	emailValidation = (event) => {
	const emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
	if (emailReg.test(event.target.value)) {
		this.setState({email: event.target.value});
		} else {
			this.setState({email: ''});
		}
	}	
	phoneValidation = (event) => {
		let phoneRe = /^[0-9]{8,12}$/;
		if (phoneRe.test(event.target.value)) {
			this.setState({phone: event.target.value});
		} else {
			this.setState({phone: ''});
		}
	}
	passwordValidation = (event) => {
		const regular = /^[A-Za-z0-9]{8}$/;
		if (regular.test(event.target.value)) {
			this.setState({password: event.target.value});
		} else {
			this.setState({password: ''})
		}
	}	
	confirmPassword = (event) => {
		if (event.target.value === this.state.password) {
			this.setState({confirmPass: event.target.value});
		} else {
			this.setState({confirmPass: ''});
		}
	}
	render() {
		const {firstName, lastName, email, password, confirmPass, phone} = this.state;
		return (
			<div className='regForm'>
				<div className='regForm--header' >
					<h1>Registration</h1>
				</div>
				<div className=''>
					<Input type='text' placeholder='Enter Your Name' onChange={this.onChangeName} valid={firstName} validationString='Name must be contained only from the letters' />
					<Input type='text' placeholder='Enter Your Surname' onChange={this.onChangeSurName} valid={lastName} validationString='SurName must be contained only from the letters' />
					<Input type='email' placeholder='Enter Your Email' onChange={this.emailValidation} valid={email} validationString='Email must be contained from the letters, or it can be numbers, _ and @' />
					<div className='phone-container'>
						<SelectCountry select={this.onChangeCountry} />
						<Input type='text' placeholder='Enter Your Phone' onChange={this.phoneValidation} valid={phone} validationString='Phone must be contained from the 8 to 12 numbers' />
					</div>
					<Input type='password' placeholder='Enter Your Password' onChange={this.passwordValidation} valid={password} validationString='Password must be contained from the letters and numbers' />
					<Input type='password' placeholder='Confirm Your Password' onChange={this.confirmPassword} valid={confirmPass} />
				</div>
				<div>
					<Button buttonName="Submit" isValid={this.formValidation} userInfo={this.state} />
				</div>
			</div>
		);
	}
}

export default RegisterForm;