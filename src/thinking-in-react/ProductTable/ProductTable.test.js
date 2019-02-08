import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductTable from './ProductTable.js';

describe("<ProductTable /> should ",()=>{
    it("render",()=>{
        const tree = renderer.create(<ProductTable search="" stock={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});