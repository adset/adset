import React, { Component } from 'react';

import './App.css';

class Input extends Component {
	
	render() {
		const { type, placeholder, onChange, valid } = this.props;
		return (
			<div className='input'>
				<input type={type} placeholder={placeholder} onChange={onChange} className={valid.length > 0 ? 'is-valid':'is-invalid'} />
			</div>
		);
	}
}

export default Input;