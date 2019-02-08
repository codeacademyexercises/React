import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';
import Button from './Button.js';

describe('Check ',()=>{
    it('renderer should display button',()=>{
        const tree = renderer.create(<Button/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});