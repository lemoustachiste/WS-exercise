import React from 'react'
import PropTypes from 'proptypes'

const AddToAll = ({ clickHandler }) => {
	return (
		<button onClick={clickHandler}>
			Add +1 to All
		</button>
	)
}

AddToAll.propTypes = {
	clickHandler: PropTypes.func
}

export default AddToAll
