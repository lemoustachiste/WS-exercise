import React from 'react'
import classNames from 'classnames'
import PropTypes from 'proptypes'
import Button from './Button'

const Control = ({ className, onAddOne, onSubstractOne }) => {
	const classes = classNames(
		'control',
		className
	)

	return (
		<div className={classes}>
			<Button clickHandler={onAddOne}>Up</Button>
			<Button clickHandler={onSubstractOne}>Down</Button>
		</div>
	)
}

Control.propTypes = {
	className: PropTypes.string,
	onAddOne: PropTypes.func,
	onSubstractOne: PropTypes.func,
}

export default Control
