import React from 'react'
import PropTypes from 'proptypes'

const Button = ({ direction, onClickHandler }) => {
	return (
		<button onClick={onClickHandler} >
			{ direction }
		</button>
	)
}

Button.proptypes = {
	direction: PropTypes.string,
	onClickHandler: PropTypes.func
}

export default Button
