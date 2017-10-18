import React from 'react'
import { shallow } from 'enzyme'
import Receiver from './Receiver'


describe('<Receiver/> test suite', function () {
	it('renders the current number passed in', function () {
		const wrapper = shallow(<Receiver number={5} />)
		expect(wrapper.text()).to.equal(5)
	})
})