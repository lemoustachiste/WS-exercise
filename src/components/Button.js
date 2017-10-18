import React from 'react'
import PropTypes from 'proptypes'

const Button = ({ children, clickHandler }) => {
	return (
		<button onClick={clickHandler} >
			{ children }
		</button>
	)
}

Button.proptypes = {
	children: PropTypes.any,
	clickHandler: PropTypes.func
}

export default Button
