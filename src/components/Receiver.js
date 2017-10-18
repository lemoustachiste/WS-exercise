import React from 'react'
import PropTypes from 'proptypes'
import classNames from 'classnames'

const Receiver = ({ number, className }) => {
	const classes = classNames(
		'receiver',
		className
	)

	return (
		<div className={classes}>
			{ number }
		</div>
	)
}

Receiver.propTypes = {
	number: PropTypes.number,
	className: PropTypes.string
}

export default Receiver
