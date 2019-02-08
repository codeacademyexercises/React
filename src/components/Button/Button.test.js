import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';
import Button from '.';
import {shallow} from 'enzyme';

describe('Button ',()=>{
    it('renderer should display button',()=>{
        const tree = renderer.create(<Button/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should trigger onClick on clicking the button',()=>{
        const wrapper = shallow(<Button name="testing" onClick={jest.fn()}/>);
        wrapper.find('button').simulate('click');
        expect(wrapper.props().onClick).toHaveBeenCalled();
    });
});