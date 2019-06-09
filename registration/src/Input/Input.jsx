import React, { Component } from 'react';

import './Input.scss';

class Input extends Component {
	state = {
		validation: true,
		value: ''
	}
	render() {
		const { type, placeholder, onChange, valid, validationString } = this.props;
		return (
			<div className='input'>
				<i class="tty icon"></i>
				<input type={type} placeholder={placeholder} onChange={onChange} />
				<span className={valid ? 'is-valid':'is-invalid'}>{validationString}</span>
			</div>
		);
	}
}

export default Input;