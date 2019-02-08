import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';
import Counter from './Counter.js';
import {shallow} from 'enzyme';

describe('Button ',()=>{
    it('renderer should display button',()=>{
        const tree = renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should trigger onClick on clicking the button',()=>{
        const wrapper = shallow(<Counter name="testing" onClick={jest.fn()}/>);
        wrapper.find('button').simulate('click');
        expect(wrapper.instance().props.onClick).toHaveBeenCalled();
    });
});