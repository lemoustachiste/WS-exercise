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
		<div className='control'>
			<Button direction='up' onClickHandler={onAddOne} />
			<Button direction='down' onClickHandler={onSubstractOne} />
		</div>
	)
}

Control.propTypes = {
	className: PropTypes.string,
	onAddOne: PropTypes.func,
	onSubstractOne: PropTypes.func,
}

export default Control
